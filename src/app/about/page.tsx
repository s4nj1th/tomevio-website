export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-foreground">
      <h1 className="text-3xl font-bold mb-4">About Tomevio</h1>
      <p className="mb-4">
        Tomevio is a free and open-source book tracking platform, built to give
        readers a fast, elegant, and privacy-respecting way to manage their
        reading lists.
      </p>
      <p className="mb-4">
        This project was created by <strong>Sanjith Muralikrishnan</strong> and
        is actively maintained as part of a personal passion for building
        accessible, well-designed software.
      </p>
      <p>
        You can find the source code on{" "}
        <a
          href="https://github.com/s4nj1th/tomevio-website"
          className="text-primary underline hover:text-primary-bright"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>
    </main>
  );
}
