# CONVENTIONS

## Language and Typing
- Use TypeScript for all application code.
- `strict` mode is enabled, so new code should stay fully typed.
- Path imports should use the `@/` alias where practical.

## Component Style
- Components are function components.
- Props are explicitly typed with local `type` aliases.
- Current code favors named exports over default exports inside feature modules.

## Styling Rules in Practice
- The user explicitly requested Tailwind-first styling.
- Layout should use `flex` and `grid`, not coordinate-driven absolute positioning for main structure.
- Recent direction prefers `rem` for typography, spacing, and radii.
- Widths should prefer `%`, `vw`, `vh`, and `max-width` over rigid fixed widths.
- `line-height` should be unitless.

## File and Naming Rules
- Kebab-case for filenames such as `hero-section.tsx`.
- PascalCase for component names.
- Semantic HTML is expected for landing sections: `header`, `nav`, `section`, `h1`, `p`, `a`, `button`.

## Shared Styling Sources
- Design tokens live in `tailwind.config.js`.
- Global CSS should stay minimal and is currently limited to fonts and base element rules in `src/styles/globals.css`.
- Typography is backed by local font packages, not remote Google imports at runtime.

## Error Handling and Validation
- There is no dedicated runtime error handling strategy yet.
- There are no schema validators, form validators, or API error contracts in the current codebase.
