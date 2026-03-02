# Advanced React Meta Portfolio

A modern, single-page portfolio website built with React 19, TypeScript, and Vite. Features a dark-themed design with smooth anchor-based navigation, a project showcase, and a validated contact form.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Scope](#project-scope)
- [Project Status](#project-status)
- [License](#license)

## Tech Stack

| Category   | Technology                                                                                           |
| ---------- | ---------------------------------------------------------------------------------------------------- |
| Framework  | [React 19](https://react.dev/) with [TypeScript 5.9](https://www.typescriptlang.org/)                |
| Build Tool | [Vite 7](https://vite.dev/)                                                                          |
| UI Library | [Chakra UI 3](https://www.chakra-ui.com/)                                                            |
| CSS        | [Tailwind CSS 4](https://tailwindcss.com/)                                                           |
| Forms      | [Formik](https://formik.org/) + [Yup](https://github.com/jquense/yup)                                |
| Icons      | [FontAwesome 7](https://fontawesome.com/), [React Icons](https://react-icons.github.io/react-icons/) |
| Theme      | [next-themes](https://github.com/pacocoursey/next-themes) (dark/light mode)                          |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/marcindobrzynski-dev/advanced-react-meta-portfolio.git
cd advanced-react-meta-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

## Available Scripts

| Script    | Command           | Description                                         |
| --------- | ----------------- | --------------------------------------------------- |
| `dev`     | `npm run dev`     | Start the Vite development server with hot reload   |
| `build`   | `npm run build`   | Type-check with TypeScript and build for production |
| `lint`    | `npm run lint`    | Run ESLint across the project                       |
| `preview` | `npm run preview` | Preview the production build locally                |

## Project Scope

The portfolio is a single-page application with anchor-based smooth-scroll navigation. It is organized into the following sections:

- **Header** - Fixed navigation bar that auto-hides on scroll, with links to each section and social icons (GitHub, LinkedIn, email).
- **Landing** - Hero section with avatar, name, and bio introduction with a randomized background color accent.
- **Projects** - Showcase of three portfolio projects displayed as cards with images, descriptions, and external links.
- **Contact** - Form with name, email, enquiry type, and message fields. Validated in real-time using Formik and Yup. Submissions are currently mocked (no backend).
- **Footer** - Copyright notice with author link.

### Project Structure

```
src/
├── assets/                          # Project mockup images
├── components/
│   ├── contact-me-section/          # Contact form, validation, context, hooks
│   ├── footer/                      # Site footer
│   ├── header/                      # Navigation bar with scroll hook
│   ├── landing-section/             # Hero/intro section
│   ├── projects-section/            # Project cards grid
│   ├── shared/                      # Reusable components
│   └── ui/                          # Chakra UI provider, color mode, toaster
├── App.tsx                          # Root component
├── main.tsx                         # Entry point
└── index.css                        # Global styles and Tailwind import
```

## Project Status

This project is under active development. The contact form currently uses a mock submission handler and is not connected to a backend service.

## License

This project is licensed under the [MIT License](LICENSE).
