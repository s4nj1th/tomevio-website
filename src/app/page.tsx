import Link from "next/link";
import HeroLogo from "@/components/HeroLogo";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="animate-fade-in dela flex flex-col items-center justify-center py-20 px-6 text-center border-b border-border-default">
        <img
          src="/logo-dark.svg"
          alt="Tomevio Logo"
          className="w-100 h-100 mb-6 animate-fade-in animate-float"
        />
        {/* <HeroLogo /> */}
        <h1 className="text-5xl font-[700] mb-4 text-minotaur font-averia">
          Tomevio
        </h1>
        <p className="text-xl mb-6 max-w-2xl text-foreground-dim">
          Open-source book tracking. Search, organize, and follow your reading
          journey across devices.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link
            href="/search"
            className="px-6 py-3 rounded bg-foreground text-background shadow-shadow-soft hover:bg-foreground-dim font-bold transition"
          >
            Get Started
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 rounded border border-border-muted text-foreground hover:bg-background-brightest font-bold transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      <section className="animate-fade-in py-16 px-6 bg-background">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="animate-fade-in text-3xl font-bold mb-10 text-foreground font-averia">
            Features
          </h2>

          <div className="animate-fade-in grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "Book Search",
                description:
                  "Find books and authors using the fast Tomevio API.",
              },
              {
                title: "Detailed Views",
                description: "Explore descriptions, author bios, and metadata.",
              },
              {
                title: "Responsive UI",
                description:
                  "Seamless reading experience on desktop and mobile.",
              },
            ].map(({ title, description }, i) => (
              <div key={i}>
                <h3 className="text-xl font-semibold mb-2 text-foreground font-averia">
                  {title}
                </h3>
                <p className="text-foreground-muted">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="animate-fade-in py-12 px-6 text-center border-t border-border-default">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-foreground font-averia">
            Coming Soon
          </h2>
          <p className="text-foreground-muted">
            Login, personalized libraries, and reading progress sync are{" "}
            <strong className="text-warning">Work in Progress (WIP)</strong>.
          </p>
        </div>
      </section>
    </main>
  );
}
