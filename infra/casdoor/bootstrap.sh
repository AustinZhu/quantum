#!/bin/sh
set -eu

cat > /conf/app.conf <<EOF
appname = casdoor
httpport = ${CASDOOR_HTTP_PORT:-8000}
runmode = ${CASDOOR_RUN_MODE:-dev}
copyrequestbody = true
driverName = postgres
dataSourceName = user=${POSTGRES_USER:-quantum} password=${POSTGRES_PASSWORD:-quantum} host=${CASDOOR_DB_HOST:-timescaledb} port=${CASDOOR_DB_PORT:-5432} dbname=${CASDOOR_DB_NAME:-casdoor} sslmode=disable
dbName = ${CASDOOR_DB_NAME:-casdoor}
tableNamePrefix =
showSql = false
redisEndpoint =
defaultStorageProvider =
isCloudIntranet = false
authState = "casdoor"
socks5Proxy = "127.0.0.1:10808"
verificationCodeTimeout = 10
initScore = 0
logPostOnly = true
isUsernameLowered = false
origin = ${CASDOOR_ORIGIN:-http://localhost:8000}
originFrontend = ${CASDOOR_ORIGIN_FRONTEND:-http://localhost:3000}
staticBaseUrl = "https://cdn.casbin.org"
isDemoMode = false
batchSize = 100
enableErrorMask = false
enableGzip = true
inactiveTimeoutMinutes =
ldapServerPort = 389
ldapsCertId = ""
ldapsServerPort = 636
radiusServerPort = 1812
radiusDefaultOrganization = "built-in"
radiusSecret = "${CASDOOR_RADIUS_SECRET:-secret}"
quota = {"organization": -1, "user": -1, "application": -1, "provider": -1}
logConfig = {"adapter":"file", "filename": "logs/casdoor.log", "maxdays":99999, "perm":"0770"}
initDataNewOnly = false
initDataFile = "./init_data.json"
frontendBaseDir = "../cc_0"
EOF

exec /server
