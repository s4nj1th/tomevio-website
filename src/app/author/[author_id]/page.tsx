import { fetchAuthor } from "@/lib/author";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

type Props = {
  params: { author_id?: string };
};

export async function generateMetadata({
  params,
}: {
  params: Record<string, string>;
}): Promise<Metadata> {
  const authorId = params?.author_id;

  if (!authorId) return {};

  const author = await fetchAuthor(authorId);
  if (!author) return {};

  return {
    title: `${author.name} - Tomevio`,
  };
}

export default async function AuthorPage({ params }: Props) {
  if (!params?.author_id) {
    return notFound();
  }

  const author = await fetchAuthor(params.author_id);
  if (!author) {
    return <div className="p-8">Author not found or error loading.</div>;
  }

  return (
    <div className="flex flex-row py-8 gap-8">
      <div className="grow">
        <p className="text-md text-[var(--foreground-faint)]">Books by</p>
        <h1
          className="text-2xl font-bold mb-4"
          style={{ fontFamily: "var(--font-averia)" }}
        >
          {author.name}
        </h1>
        <div className="border border-[var(--border-muted)] rounded p-4">
          {author.works && author.works.length > 0 ? (
            <div className="">
              <ul className="list-disc pl-5">
                {author.works.map((book) => (
                  <li key={book.work_id} className="mb-1">
                    <Link href={`/book/${book.work_id}`} className="hover:text-[var(--color-blue)] transition-colors">
                    {book.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-[var(--foreground-faint)] text-center items-center">
              No books available.
            </p>
          )}
        </div>
      </div>

      <div className="p-8 w-82 flex flex-col shrink-0 gap-4">
        <img
          src={`https://covers.openlibrary.org/a/olid/${params.author_id}-L.jpg`}
          alt={author.name}
          className="w-full border border-[var(--border-default)] rounded shadow-lg"
        />
        {author.bio ? (
          <p className="text-[var(--foreground-faint)]">{author.bio}</p>
        ) : (
          <p className="text-[var(--foreground-faint)] text-center">No biography available.</p>
        )}
      </div>
    </div>
  );
}
