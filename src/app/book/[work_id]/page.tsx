import Link from "next/link";
import { fetchBook } from "@/lib/book";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: { work_id?: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!params?.work_id) return {};

  const book = await fetchBook(params.work_id);
  if (!book) return {};

  return {
    title: `${book.title} - Tomevio`,
  };
}

function parseDescription(raw: string | undefined | null): {
  quote?: string;
  body: string;
} {
  if (!raw) return { body: "No description available." };

  const match = raw.match(/\*\*(.*?)\*\*/);
  if (match) {
    const quote = match[1];
    const body = raw.replace(match[0], "").trim();
    return { quote, body };
  }

  return { body: raw };
}

export default async function BookPage({ params }: Props) {
  if (!params?.work_id) {
    return notFound();
  }

  const book = await fetchBook(params.work_id);
  if (!book) {
    return <div className="p-8">Book not found or error loading.</div>;
  }

  const hasValidCover = book.covers && book.covers.length > 0;
  const { quote, body } = parseDescription(book.description);

  return (
    <div className="flex md:flex-row flex-col p-8 gap-4">
      <div className="w-[200px] aspect-[2/3] shrink-0 rounded overflow-hidden">
        {hasValidCover ? (
          <img
            src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`}
            alt={book.title}
            className="w-full h-fit object-contain border border-border-muted shadow-lg shadow-black"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-center text-lg text-background-brightest font-averia p-4 border border-border-muted shadow-lg shadow-black">
            {book.title}
          </div>
        )}
      </div>

      <div>
        <h1 className="text-4xl font-bold font-averia">{book.title}</h1>

        <p className="text-lg text-foreground-faint mb-4">
          by{" "}
          {book.authors && book.authors.length > 0
            ? book.authors.map((author, idx) => (
                <span key={author.key}>
                  <Link
                    href={`/author/${author.key}`}
                    className="hover:text-blue transition-colors"
                  >
                    {author.name}
                  </Link>
                  {idx < book.authors.length - 1 && ", "}
                </span>
              ))
            : "Unknown"}
        </p>

        {/* <p className="text-sm text-[foreground-faint] mb-4">
          First published in {book.first_publish_year || "N/A"}
        </p> */}

        {quote && (
          <p className="font-bold text-md my-4 font-averia">"{quote}"</p>
        )}

        <p className="whitespace-pre-line text-sm text-foreground-dim">
          {body}
        </p>
      </div>
    </div>
  );
}
