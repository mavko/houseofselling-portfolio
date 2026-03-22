## Learned User Preferences

- Treat the portfolio as a low-frequency, impression-first surface: favor smooth, elegant motion when it stays performant, not utilitarian instant UI.
- For `ProjectsList`, keep the established row behavior unless explicitly asked to change it: opacity stagger with `0.1 * index` and the dual underline width animations.
- When editing Framer Motion `transition` objects for list rows, do not leave `duration: undefined` alongside `delay`; it can stop the opacity entrance from running.

## Learned Workspace Facts

- Next.js 16 with Turbopack does not bundle `.mp4` as importable modules; put clips under `public/` (for example `public/videos/`) and use string paths such as `/videos/name.mp4`.
- Title typography uses Mona Sans from `next/font/google` with CSS variable `--font-mona-sans`; Tailwind `font-title` maps to that stack while body copy stays on Geist Sans.
