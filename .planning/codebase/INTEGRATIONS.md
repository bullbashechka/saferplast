# INTEGRATIONS

## Current External Integrations
- There are no live API integrations in application code yet.
- No database client is configured.
- No authentication provider is configured.
- No analytics, error reporting, payment, CRM, or email SDK is present.

## Infrastructure References
- `wrangler.jsonc` indicates a planned Cloudflare target.
- `README.md` explicitly mentions future Cloudflare deployment work.
- `.env.example` currently defines:
  - `NEXT_PUBLIC_SITE_URL`
  - `NEXT_PUBLIC_CONTACT_PHONE`

## Asset Integration
- Static assets are served from `public/`.
- Header icons live in `public/icons/location.svg` and `public/icons/phone.svg`.
- Brand and hero images live in `public/images/logo.png` and `public/images/herophotogirl.png`.

## Design Inputs
- `docs/DESIGN_SYSTEM.md` acts as the current design reference.
- The landing page implementation uses this file for colors, typography, spacing, and blur tokens.

## Planned but Not Implemented
- Lead capture is implied by `src/features/lead-form/lead-form-section.tsx`, but there is no submission backend.
- Pricing logic is implied by `src/features/calculator/calculator-section.tsx`, but there is no calculation engine yet.
- `src/lib/site-config.ts` suggests a future source of centralized business metadata, but it is not connected to UI or env vars.

## Integration Risks
- Environment variables are defined but unused, which creates drift between config and runtime behavior.
- Cloudflare deployment intent is present, but no adapter or worker runtime constraints are documented.
- Contact and city data are hardcoded in UI components instead of flowing from a shared config source.
