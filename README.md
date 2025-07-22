<div align="center">
  <h1>Tomevio Website</h1>
  <p>The web frontend for the Tomevio book tracking platform.</p>
</div>

---

This repo contains the web frontend for **Tomevio**, a FOSS book tracking platform. Built using **Next.js** (React + TypeScript), it connects to the [Tomevio backend](https://github.com/s4nj1th/tomevio-backend) and provides a fast, responsive interface for tracking books across devices.

---

## Features

- **Book Search**: Search books and authors using the Tomevio API.
- **Book Details**: View descriptions, authors, and metadata.
- **Author Pages**: See author bios and related works.
- **Responsive UI**: Works across desktop and mobile devices.
- **Built with Next.js**: Fast, SEO-friendly rendering with API integration.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-org/tomevio-website.git
   cd tomevio-website
   ```


2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

Create a `.env.local` file with the following:

```
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080
```

Update the URL based on your backend deployment.

---

## Project Structure

* `pages/`: App routes
* `components/`: Reusable UI components
* `lib/`: API helpers and utilities
* `styles/`: Global and scoped styles

---

## Contributing

Pull requests and issues are welcome!
Please:

* Use consistent code formatting (`prettier`)
* Keep components modular and accessible
* Document major changes

---

## License

Licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Maintainers

### Sanjith

* [Github](https://github.com/s4nj1th)
* [Twitter (X)](https://x.com/s4nj1th)
* [Email](mailto:sanjith.develops@gmail.com)
