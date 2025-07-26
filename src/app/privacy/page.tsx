export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-[var(--foreground)]">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        Tomevio respects your privacy. This site does not collect personal
        information unless explicitly provided by you. There are no ads, no
        third-party trackers, and no hidden analytics.
      </p>
      <p className="mb-4">
        Any data you submit is used only for the functionality of the app (e.g.,
        saving your book list) and is not shared with anyone.
      </p>
      <p>
        This project is open source and fully transparent. You can review the
        code on{" "}
        <a
          href="https://github.com/s4nj1th/tomevio-website"
          className="text-[var(--color-primary)] underline hover:text-[var(--color-primary-bright)]"
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
