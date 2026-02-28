package auth

import (
	"context"
	"errors"
	"net/http"
	"strings"
	"time"

	"connectrpc.com/connect"
	datafeedv1connect "github.com/AustinZhu/quantum/datafeed/api/datafeed/v1/datafeedv1connect"
	"github.com/AustinZhu/quantum/datafeed/internal/infrastructure/conf"
	"github.com/casbin/casbin/v2"
	casbinmodel "github.com/casbin/casbin/v2/model"
	"github.com/coreos/go-oidc/v3/oidc"
)

type ConnectHandlerOptions struct {
	Values []connect.HandlerOption
}

type Principal struct {
	Subject  string
	Subjects []string
	Claims   map[string]any
}

type principalContextKey struct{}

type AuthInterceptor struct {
	verifier *oidc.IDTokenVerifier
	enforcer *casbin.Enforcer
}

const casbinModelRBAC = `
[request_definition]
r = sub, obj, act

[policy_definition]
p = sub, obj, act

[role_definition]
g = _, _

[policy_effect]
e = some(where (p.eft == allow))

[matchers]
m = (g(r.sub, p.sub) || r.sub == p.sub) && (p.obj == "*" || r.obj == p.obj) && (p.act == "*" || r.act == p.act)
`

func PrincipalFromContext(ctx context.Context) (Principal, bool) {
	value := ctx.Value(principalContextKey{})
	principal, ok := value.(Principal)
	return principal, ok
}

func New(cfg conf.Config) (ConnectHandlerOptions, error) {
	interceptor, enabled, err := newAuthInterceptor(cfg)
	if err != nil {
		return ConnectHandlerOptions{}, err
	}
	if !enabled {
		return ConnectHandlerOptions{}, nil
	}
	return ConnectHandlerOptions{
		Values: []connect.HandlerOption{
			connect.WithInterceptors(interceptor),
		},
	}, nil
}

func newAuthInterceptor(cfg conf.Config) (*AuthInterceptor, bool, error) {
	if !cfg.Server.Auth.Enabled {
		return nil, false, nil
	}
	interceptor := &AuthInterceptor{}

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	provider, err := oidc.NewProvider(ctx, cfg.Server.Auth.CasdoorIssuerURL)
	if err != nil {
		return nil, false, err
	}

	oidcConfig := &oidc.Config{}
	if audience := strings.TrimSpace(cfg.Server.Auth.CasdoorAudience); audience != "" {
		oidcConfig.ClientID = audience
	} else {
		oidcConfig.SkipClientIDCheck = true
	}
	interceptor.verifier = provider.Verifier(oidcConfig)

	enforcer, err := newEnforcer(cfg.Server.Auth)
	if err != nil {
		return nil, false, err
	}
	interceptor.enforcer = enforcer
	return interceptor, true, nil
}

func newEnforcer(cfg conf.AuthConfig) (*casbin.Enforcer, error) {
	modelPath := strings.TrimSpace(cfg.CasbinModelPath)
	policyPath := strings.TrimSpace(cfg.CasbinPolicyPath)
	switch {
	case modelPath != "" && policyPath != "":
		return casbin.NewEnforcer(modelPath, policyPath)
	case modelPath != "" || policyPath != "":
		return nil, errors.New("both casbin model and policy paths must be configured together")
	}

	model, err := casbinmodel.NewModelFromString(casbinModelRBAC)
	if err != nil {
		return nil, err
	}
	enforcer, err := casbin.NewEnforcer(model)
	if err != nil {
		return nil, err
	}

	defaultPolicies := [][]string{
		{"admin", "*", "*"},

		{"viewer", datafeedv1connect.DatafeedServiceReplayTicksProcedure, "invoke"},
		{"viewer", datafeedv1connect.DatafeedServiceQueryBarsProcedure, "invoke"},
		{"viewer", datafeedv1connect.DatafeedServiceListNewsProcedure, "invoke"},
		{"viewer", datafeedv1connect.DatafeedServiceListSocialProcedure, "invoke"},
		{"viewer", datafeedv1connect.DatafeedServiceGetConfigProcedure, "invoke"},
		{"viewer", datafeedv1connect.DatafeedServiceGetTimeProcedure, "invoke"},
		{"viewer", datafeedv1connect.DatafeedServiceGetBarsProcedure, "invoke"},
		{"viewer", datafeedv1connect.DatafeedServiceGetHistoryProcedure, "invoke"},
		{"viewer", datafeedv1connect.DatafeedServiceGetQuotesProcedure, "invoke"},
		{"viewer", datafeedv1connect.DatafeedServiceGetMarksProcedure, "invoke"},
		{"viewer", datafeedv1connect.DatafeedServiceGetTimescaleMarksProcedure, "invoke"},
		{"viewer", datafeedv1connect.DatafeedServiceResolveSymbolProcedure, "invoke"},
		{"viewer", datafeedv1connect.DatafeedServiceGetSymbolGroupInfoProcedure, "invoke"},
		{"viewer", datafeedv1connect.DatafeedServiceSearchSymbolsProcedure, "invoke"},
		{"viewer", datafeedv1connect.DatafeedServiceStreamBarsProcedure, "invoke"},
		{"viewer", datafeedv1connect.DatafeedServiceSubscribeBarsProcedure, "invoke"},
		{"viewer", datafeedv1connect.DatafeedServiceListSymbolsProcedure, "invoke"},
		{"viewer", datafeedv1connect.ScannerServiceScanSymbolsProcedure, "invoke"},
	}
	if _, err := enforcer.AddPolicies(defaultPolicies); err != nil {
		return nil, err
	}

	defaultGroupingPolicies := [][]string{
		{"admin@example.com", "admin"},
		{"admin", "admin"},
		{"viewer@example.com", "viewer"},
		{"viewer", "viewer"},
		{"users", "viewer"},
	}
	if _, err := enforcer.AddGroupingPolicies(defaultGroupingPolicies); err != nil {
		return nil, err
	}

	return enforcer, nil
}

func (i *AuthInterceptor) WrapUnary(next connect.UnaryFunc) connect.UnaryFunc {
	return func(ctx context.Context, req connect.AnyRequest) (connect.AnyResponse, error) {
		principal, err := i.authorize(ctx, req.Spec().Procedure, req.Header())
		if err != nil {
			return nil, err
		}
		return next(context.WithValue(ctx, principalContextKey{}, principal), req)
	}
}

func (i *AuthInterceptor) WrapStreamingClient(next connect.StreamingClientFunc) connect.StreamingClientFunc {
	return next
}

func (i *AuthInterceptor) WrapStreamingHandler(next connect.StreamingHandlerFunc) connect.StreamingHandlerFunc {
	return func(ctx context.Context, conn connect.StreamingHandlerConn) error {
		principal, err := i.authorize(ctx, conn.Spec().Procedure, conn.RequestHeader())
		if err != nil {
			return err
		}
		return next(context.WithValue(ctx, principalContextKey{}, principal), conn)
	}
}

func (i *AuthInterceptor) authorize(ctx context.Context, procedure string, headers http.Header) (Principal, error) {
	if i.verifier == nil || i.enforcer == nil {
		return Principal{}, connect.NewError(connect.CodeUnauthenticated, errors.New("unauthorized"))
	}

	token, ok := bearerToken(headers.Get("Authorization"))
	if !ok {
		return Principal{}, connect.NewError(connect.CodeUnauthenticated, errors.New("missing bearer token"))
	}

	idToken, err := i.verifier.Verify(ctx, token)
	if err != nil {
		return Principal{}, connect.NewError(connect.CodeUnauthenticated, err)
	}

	claims := map[string]any{}
	if err := idToken.Claims(&claims); err != nil {
		return Principal{}, connect.NewError(connect.CodeUnauthenticated, err)
	}

	subjects := extractSubjects(claims)
	if len(subjects) == 0 {
		return Principal{}, connect.NewError(connect.CodeUnauthenticated, errors.New("missing token subject"))
	}
	for _, subject := range subjects {
		allowed, err := i.enforcer.Enforce(subject, procedure, "invoke")
		if err != nil {
			return Principal{}, connect.NewError(connect.CodeInternal, err)
		}
		if allowed {
			return Principal{
				Subject:  subject,
				Subjects: subjects,
				Claims:   claims,
			}, nil
		}
	}

	return Principal{}, connect.NewError(connect.CodePermissionDenied, errors.New("forbidden"))
}

func bearerToken(authorizationHeader string) (string, bool) {
	if authorizationHeader == "" {
		return "", false
	}
	const bearerPrefix = "Bearer "
	if !strings.HasPrefix(authorizationHeader, bearerPrefix) {
		return "", false
	}
	token := strings.TrimSpace(strings.TrimPrefix(authorizationHeader, bearerPrefix))
	if token == "" {
		return "", false
	}
	return token, true
}

func extractSubjects(claims map[string]any) []string {
	seen := map[string]struct{}{}
	subjects := make([]string, 0, 8)
	appendSubject := func(value string) {
		value = strings.TrimSpace(value)
		if value == "" {
			return
		}
		if _, exists := seen[value]; exists {
			return
		}
		seen[value] = struct{}{}
		subjects = append(subjects, value)
	}

	appendSubject(asString(claims["sub"]))
	appendSubject(asString(claims["preferred_username"]))
	appendSubject(asString(claims["name"]))
	appendSubject(asString(claims["email"]))
	appendSubject(asString(claims["owner"]))

	for _, item := range asStringSlice(claims["roles"]) {
		appendSubject(item)
	}
	for _, item := range asStringSlice(claims["groups"]) {
		appendSubject(item)
	}
	for _, item := range asStringSlice(claims["role"]) {
		appendSubject(item)
	}

	realmAccess, _ := claims["realm_access"].(map[string]any)
	for _, item := range asStringSlice(realmAccess["roles"]) {
		appendSubject(item)
	}

	return subjects
}

func asString(value any) string {
	text, _ := value.(string)
	return text
}

func asStringSlice(value any) []string {
	switch typed := value.(type) {
	case []string:
		return typed
	case []any:
		result := make([]string, 0, len(typed))
		for _, item := range typed {
			if text := asString(item); text != "" {
				result = append(result, text)
			}
		}
		return result
	default:
		return nil
	}
}
