# Personal Portfolio Website

A modern, responsive personal portfolio website built with React and Vite. Features a clean design with dark mode support and smooth scrolling navigation.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark Mode Support**: Automatic dark mode based on system preferences
- **Smooth Navigation**: Smooth scrolling between sections
- **Component-Based Architecture**: Modular React components for maintainability
- **Modern UI**: Clean, professional design with CSS variables for theming

## Sections

- **Hero**: Introduction and call-to-action buttons
- **About**: Personal information and statistics
- **Skills**: Display of technical skills and abilities
- **Projects**: Showcase of featured projects
- **Contact**: Social media links for connection

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

### Contact form setup

The contact form uses EmailJS. Copy `.env.example` to `.env` and fill in the
three values from your EmailJS account before deploying. Without these values,
the form explains that it is unavailable instead of submitting placeholder credentials.

### Deploying to Netlify

This project includes a `netlify.toml` with the production build command, `dist`
publish directory, Node.js 22, and a single-page-app fallback. When connecting
your repository, set the base directory to this project folder if it is nested
inside a larger repository.

Add `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and
`VITE_EMAILJS_PUBLIC_KEY` under **Site configuration → Environment variables**
in Netlify. These values are used during the build, so trigger a new deploy
after changing them. Without them, the contact form reports that it is not
configured.

## Customization

To personalize this portfolio for your own use:

1. Update the name and title in `src/components/Hero.jsx`
2. Add your social media links in `src/components/Contact.jsx`
3. Update the gallery entries in `src/Carouselcomponent.jsx`
4. Update the address in `src/data/locations.json`
5. Update the footer copyright in `src/components/Footer.jsx`

## Technologies

- React 19
- Vite 8
- CSS Variables for theming
- ESLint for code quality
