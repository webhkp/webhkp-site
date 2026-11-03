# WEBHKP

Consulting and portfolio website, built with [Astro](https://astro.build). No UI framework: plain Astro components, scoped CSS and a small amount of vanilla TypeScript.

## Pages

| Route              | Content                                                           |
| :----------------- | :---------------------------------------------------------------- |
| `/`                | Hero, stats, tech marquee, services, featured work, blogs, certs  |
| `/about`           | Bio, tech stack with experience levels, principles, timeline, socials |
| `/services`        | Service details, engagement models, process, FAQ                  |
| `/projects`        | Filterable project grid                                           |
| `/projects/[id]`   | Project case study (from Markdown)                                |
| `/blogs`           | The BigBox network of learning sites                              |
| `/certifications`  | Filterable certification grid                                     |
| `/contact`         | Contact form (opens the visitor's email app), availability, FAQ   |
| `404`              | Not-found page                                                    |

## Editing content

Almost everything is data. Edit these files instead of the page markup:

| File                              | What it controls                                         |
| :-------------------------------- | :------------------------------------------------------- |
| `src/data/site.ts`                | Name, email, location, availability, social links, nav, hero words, stats |
| `src/data/about.ts`               | Bio, "currently", principles, **tech stack**, experience  |
| `src/data/blogs.ts`               | BigBox network sites                                     |
| `src/data/certifications.ts`      | Certifications (**demo data**)                           |
| `src/data/services.ts`            | Services, engagement models, process, FAQ, testimonials  |
| `src/content/projects/*.md`       | One Markdown file per project (frontmatter + case study) |

To add a project, copy any file in `src/content/projects/`. The filename becomes the URL slug, and the frontmatter schema lives in `src/content.config.ts`.

Search the code for `TODO` and `DEMO` to find placeholders to replace before launch.

## Interactive features

- Pointer-reactive canvas grid in the home hero (pauses off-screen)
- Command palette: `Ctrl/⌘ + K` or `/`
- Single dark navy & blue theme; all colors are design tokens at the top of `src/styles/global.css`
- Scroll reveals, animated counters, rotating hero words, spotlight-hover cards
- Cross-page view transitions (Chromium/Safari, progressive enhancement)
- All motion respects `prefers-reduced-motion`

## Commands

| Command           | Action                                   |
| :---------------- | :--------------------------------------- |
| `npm install`     | Install dependencies                     |
| `npm run dev`     | Start the dev server at `localhost:4321` |
| `npm run build`   | Build the production site to `./dist/`   |
| `npm run preview` | Preview the production build locally     |
