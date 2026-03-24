# CONCERNS

## Immediate Technical Concerns
- Several files outside the main landing flow still contain mojibake or encoding damage, including visible Russian text in placeholder sections such as `src/features/calculator/calculator-section.tsx`, `src/features/lead-form/lead-form-section.tsx`, and `src/lib/site-config.ts`.
- The repository has generated noise like `tsconfig.tsbuildinfo` appearing in git status, which suggests `.gitignore` is incomplete.
- The project is currently design-driven and highly iterative, so layout churn is expected.

## Architectural Concerns
- `src/features/calculator/` and `src/features/lead-form/` are placeholders only, so the current architecture has not been stress-tested by real product logic.
- Contact data is still hardcoded in the landing header instead of consistently using `src/lib/site-config.ts` or env-backed configuration.
- Navigation includes targets such as `#projects` and `#contacts`, but corresponding sections are not implemented.

## Delivery Concerns
- Cloudflare is planned, but there is no adapter, build target, or deployment validation yet.
- The app does not yet prove compatibility with a Pages or Workers runtime.
- There is no CI to enforce lint, typecheck, or future build rules.

## Frontend Quality Concerns
- Pixel matching against Figma has already pulled the code between absolute positioning and flow-based layout strategies.
- Without a documented “layout policy,” repeated rework is likely.
- The repo needs a stable decision on what matters more: exact coordinate fidelity or scalable responsive structure.

## Recommended Next Actions
- Fix encoding issues in remaining placeholder files.
- Add `tsconfig.tsbuildinfo` to `.gitignore`.
- Normalize business constants into `src/lib/site-config.ts` and consume them from UI.
- Decide and document a single layout strategy for future landing work.
