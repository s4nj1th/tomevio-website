export default function Footer() {
  return (
    <footer className="bg-[var(--background-secondary)] text-[var(--foreground)] py-8 text-sm shadow-inner mt-12 border-t-2 border-[var(--background-bright)]">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="font-semibold">&copy; {new Date().getFullYear()} Tomevio</p>
          <p className="text-zinc-400">
            Built by Sanjith Muralikrishnan · MIT License
          </p>
        </div>

        <div className="flex space-x-4">
          <a
            href="https://github.com/s4nj1th/tomevio-website"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-primary)] transition-colors"
          >
            GitHub
          </a>
          <a
            href="/about"
            className="hover:text-[var(--color-primary)] transition-colors"
          >
            About
          </a>
          <a
            href="/privacy"
            className="hover:text-[var(--color-primary)] transition-colors"
          >
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
