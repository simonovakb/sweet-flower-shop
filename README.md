# Sweet Flower Shop

A modern, responsive flower shop website built with Astro and Tailwind CSS.

## Features

- Modern and elegant design
- Fully responsive (mobile, tablet, desktop)
- Fast and optimized with Astro
- SEO-friendly and accessible
- Optimized images with responsive breakpoints
- Smooth animations and transitions

## Project Structure

```text
/
├── public/
├── src/
│   ├── assets/
│   │   └── images/         # Optimized images
│   │       ├── banners/    # Hero banner images
│   │       └── flowers/    # Product/gallery images
│   ├── components/
│   │   ├── header/         # Header with sticky navigation
│   │   ├── footer/         # Footer with contact info
│   │   ├── sections/       # Page sections
│   │   │   ├── banner-section/
│   │   │   ├── about-section/
│   │   │   ├── services-section/
│   │   │   ├── flower-gallery-section/
│   │   │   ├── photo-section/
│   │   │   ├── work-with-us-section/
│   │   │   └── contact-section/
│   │   └── common/         # Reusable components
│   │       ├── carousel/   # Swiper carousel
│   │       ├── cards/      # Card components
│   │       │   ├── image-card/
│   │       │   └── service-card/
│   │       └── sections/
│   │           └── info-section/
│   ├── layouts/
│   │   └── Layout.astro    # Main layout with head/footer
│   ├── pages/
│   │   ├── index.astro     # Home page
│   │   ├── about.astro     # About page
│   │   ├── gallery.astro   # Gallery page
│   │   └── contact.astro   # Contact page
│   └── styles/
│       └── global.css      # Global styles and CSS variables
├── tests/                  # Playwright E2E tests
│   ├── home.spec.ts
│   ├── navigation.spec.ts
│   └── carousel.spec.ts
├── astro.config.mjs
├── playwright.config.ts
├── biome.json
└── package.json
```

## Tech Stack

- **Framework**: [Astro](https://astro.build) v5.16.3
- **Styling**: [Tailwind CSS](https://tailwindcss.com) v4.1.17
- **Carousel**: [Swiper](https://swiperjs.com) v12.0.3
- **Testing**: [Playwright](https://playwright.dev) v1.57.0
- **Linting**: [Biome](https://biomejs.dev)
- **Formatting**: [Prettier](https://prettier.io) with Astro plugin

## Commands

All commands are run from the root of the project:

| Command               | Action                                     |
| :-------------------- | :----------------------------------------- |
| `npm install`         | Install dependencies                       |
| `npm run dev`         | Start local dev server at `localhost:4321` |
| `npm run build`       | Build production site to `./dist/`         |
| `npm run preview`     | Preview build locally before deploying     |
| `npm run lint`        | Check code with Biome                      |
| `npm run lint:fix`    | Fix code issues with Biome                 |
| `npm run format`      | Format code with Prettier                  |
| `npm run test`        | Run Playwright tests                       |
| `npm run test:ui`     | Run tests in UI mode (interactive)         |
| `npm run test:headed` | Run tests with visible browser             |
| `npm run test:report` | Show test report                           |

## Design System

The project uses a comprehensive design system with:

- **Color Palette**: Custom accent colors and typography colors
- **Typography**: Figtree (body) and Caprasimo (headings)
- **Responsive Breakpoints**: 320px (mobile), 800px (tablet), 1024px (desktop), 1280px (xl)
- **CSS Variables**: Defined in `src/styles/global.css`

## Responsive Design

The site is optimized for three main breakpoints:

- **Mobile**: 320px - 799px
- **Tablet**: 800px - 1023px
- **Desktop**: 1024px+

## License

This project is part of a portfolio.

## Author

**Ekaterina Simonova**

- GitHub: [@simonovakb](https://github.com/simonovakb)
- Linkedin [simonovakb](https://www.linkedin.com/in/simonovakb/)

## Acknowledgments

- Built with [Astro](https://astro.build)
- Styled with [Tailwind CSS](https://tailwindcss.com)
