<div align="center">
  <h1>Tomevio Website</h1>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="public/logo-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="assets/logo-light.svg">
    <img alt="Tomevio: Your personal book tracking companion"
         src="assets/logo-light.svg"
         width="50%">
  </picture>
  <p>A modern web interface for tracking and discovering books</p>
</div>

## Overview

The Tomevio web frontend provides a responsive, user-friendly interface for the [Tomevio book tracking platform](https://github.com/s4nj1th/tomevio-backend). Built with **Next.js** (React + TypeScript), it delivers:

- Instant search and discovery of books and authors
- Seamless synchronization across devices
- Optimized performance through static generation
- Intuitive book management interface

## Key Features

- **Comprehensive Book Search** - Find titles and authors through the Tomevio API
- **Rich Book Details** - View covers, descriptions, and publication information
- **Author Profiles** - Explore biographies and complete bibliographies
- **Cross-Device Experience** - Fully responsive design for all screen sizes
- **Modern Tech Stack** - Next.js, TypeScript, and optimized API integration

## Quick Start

### Prerequisites
- Node.js v18+
- npm or Yarn

### Installation
```bash
# Clone repository
git clone https://github.com/s4nj1th/tomevio-website.git
cd tomevio-website

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000` in your browser to access the application.

## Configuration

Create a `.env.local` file with your environment variables:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080  # Point to your backend instance
```

## Project Architecture

```
tomevio-website/
├── pages/          # Application routes and pages
├── components/     # Reusable UI components
├── lib/            # API clients and utilities
├── public/         # Static assets
├── styles/         # Global and component styles
└── types/          # TypeScript type definitions
```

## Development Guidelines

We welcome contributions! Please ensure:
- Code follows existing style (`prettier` formatted)
- Components remain modular and testable
- New features include appropriate documentation
- Changes are thoroughly tested

## License
Distributed under the [MIT License](LICENSE).

## Contact
### Project Maintainer
**Sanjith**
[GitHub](https://github.com/s4nj1th) | [Twitter](https://x.com/s4nj1th) | [Email](mailto:sanjith.develops@gmail.com)
