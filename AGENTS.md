# Repository Guidelines

## Project Structure & Module Organization
- `src/` holds the React app entry points (`index.js`, `App.jsx`), shared styles (`index.css`), and setup files.
- `src/components/` contains page/section components in PascalCase (e.g., `Home.jsx`, `Projects.jsx`).
- `src/styles/` holds per-component CSS files that mirror component names (e.g., `Projects.css`).
- `src/img/` and `src/font/` store local images and font assets imported by components.
- `public/` contains static assets, the HTML shell (`index.html`), favicons, and deploy-time files.
- Tests live in `src/` (e.g., `App.test.js`) with helpers in `src/setupTests.js`.

## Build, Test, and Development Commands
- `npm install` installs dependencies.
- `npm start` runs the dev server with hot reload.
- `npm run build` creates a production build in `build/`.
- `npm test` runs Jest in watch mode (React Testing Library).
- `npm run deploy` publishes the build to GitHub Pages via `gh-pages` (runs `npm run build` first).

## Coding Style & Naming Conventions
- JavaScript/JSX uses double quotes and semicolons; keep style consistent with nearby files.
- Indentation is commonly 4 spaces in JSX here; follow the existing file formatting.
- Component files use PascalCase; CSS files match the component name and live in `src/styles/`.
- Keep asset imports relative and colocated with the component that uses them.

## Testing Guidelines
- Testing stack: Jest + React Testing Library (see `src/setupTests.js`).
- Test files use `*.test.js` naming (e.g., `App.test.js`).
- Add or update tests when changing component behavior; UI-only tweaks can be validated manually but note what you checked.

## Commit & Pull Request Guidelines
- Commit messages commonly use `feat:` and `fix:` prefixes, and occasionally scoped forms like `fix(file.css): ...`.
- Keep subjects short and imperative; include context if the change is visual.
- PRs should include a brief summary, test notes, and screenshots or screen recordings for UI changes.
- The README suggests pushing to `origin master` before running `npm run deploy`.
