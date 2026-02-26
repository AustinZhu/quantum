# Terminal

Next.js admin dashboard for market visualization, strategy/risk configuration, and service health.

## Architecture

- App Router UI (`src/app/*`)
- BFF proxy routes (`src/app/api/*`) to backend services
- ConnectRPC client wrappers in `src/lib/connect`
- Chart rendering adapters for TradingView and Plotly artifacts
- Tailwind CSS v4 enabled via PostCSS (`postcss.config.mjs` + `@import "tailwindcss"`)

## Tooling

- Lint: `pnpm run lint` (OXC `oxlint`)
- Format check: `pnpm run fmt:check` (OXC `oxfmt`)
- Format write: `pnpm run fmt`
- Shadcn CLI: `pnpm dlx shadcn@latest add <component>`
