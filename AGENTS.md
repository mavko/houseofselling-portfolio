## Learned User Preferences

- Treat the portfolio as a low-frequency, impression-first surface: favor smooth, elegant motion when it stays performant, not utilitarian instant UI.
- For `ProjectsList`, keep the established row behavior unless explicitly asked to change it: opacity stagger with `0.1 * index` and the dual underline width animations.
- When editing Framer Motion `transition` objects for list rows, do not leave `duration: undefined` alongside `delay`; it can stop the opacity entrance from running.
- In the projects dialog, gate `HoverExpand` hover (image reveal) until the list entrance animation has finished so hover does not fight the intro; when reduced motion is preferred, enable interaction immediately.
- Use `font-title` for project list section headings and hover-expand row typography so Mona Sans applies; `font-sans` there inherits Geist and breaks the title versus body split.
- When applying Mona Sans for `font-title` or `font-display`, style it with `font-weight: 600`, `font-stretch: 125%`, and `letter-spacing: -0.2px` to match the exact intended typography.

## Learned Workspace Facts

- Next.js 16 with Turbopack does not bundle `.mp4` as importable modules; put clips under `public/` (for example `public/videos/`) and use string paths such as `/videos/name.mp4`.
- Mona Sans comes from `next/font/google` with `subsets: ['latin', 'latin-ext']` and `variable: '--font-mona-sans'` on `<html>`; Tailwind `font-title` should use `var(--font-mona-sans)` in the theme. Body Geist Sans uses `GeistSans` from `geist/font/sans` (`className` on `<html>`). Do not also wire `Geist` from `next/font/google` to `--font-sans` in parallel—that second stack competes with Tailwind preflight and can stop Mona from applying on `font-title`.
- When using WebGL/shader backgrounds (e.g., `@paper-design/shaders-react`) for hover reveals, keep them always mounted behind `opacity: 0` and toggle animation `speed={0}` instead of unmounting. Mounting WebGL during a hover spring causes severe compile lag. Lock canvas dimensions to the final expanded height to prevent expensive per-frame WebGL resizes during layout animations.