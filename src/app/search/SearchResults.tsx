"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Book, Author, searchBooksAndAuthors } from "@/lib/search";
import AuthorImage from "@/components/AuthorImage";

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [books, setBooks] = useState<Book[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<"books" | "authors">("books");

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setLoading(true);
      const { books, authors } = await searchBooksAndAuthors(query);
      setBooks(books);
      setAuthors(authors);
      setLoading(false);
    };

    fetchData();
  }, [query]);

  const sharedItemClasses =
    "flex gap-4 px-5 py-6 items-center transition rounded-md";
  const imageWrapperClasses =
    "w-[80px] h-[120px] flex items-center justify-center bg-gray-100 text-gray-600 text-[10px] overflow-hidden shadow-black shadow-lg border border-border-muted";

  const renderBookList = () => (
    <section className="mb-10">
      {books.length > 0 ? (
        <ul>
          {books.map((book) => (
            <div key={book.work_id}>
              <li className={sharedItemClasses}>
                <Link
                  href={`/book/${book.work_id}`}
                  className={imageWrapperClasses}
                >
                  {book.cover_id && book.cover_id > 0 ? (
                    <img
                      src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center px-3 font-averia">
                      {book.title}
                      <br />({book.first_publish_year || "n.d."})
                    </div>
                  )}
                </Link>

                <div className="flex flex-col justify-center">
                  <Link
                    href={`/book/${book.work_id}`}
                    className="text-2xl font-bold hover:text-blue transition-colors font-averia"
                  >
                    {book.title}
                  </Link>

                  {book.author_name && book.author_id ? (
                    <span className="text-sm text-foreground-muted ml-1">
                      by{" "}
                      {book.author_name.map((name, i) => {
                        const id = book.author_id?.[i];
                        return (
                          <span key={id || name}>
                            <Link
                              href={`/author/${id}`}
                              className="hover:text-blue text-foreground-muted transition"
                            >
                              {name}
                            </Link>
                            {i < book.author_name.length - 1 && ", "}
                          </span>
                        );
                      })}{" "}
                      ({book.first_publish_year || "n.d."})
                    </span>
                  ) : (
                    <span className="text-sm text-foreground-muted ml-1">
                      by Unknown ({book.first_publish_year || "n.d."})
                    </span>
                  )}
                </div>
              </li>
              <hr className="border-border-muted mx-5" />
            </div>
          ))}
        </ul>
      ) : (
        <p className="text-foreground-faint text-center">No books found.</p>
      )}
    </section>
  );

  const renderAuthorList = () => (
    <section className="mb-10">
      {authors.length > 0 ? (
        <ul>
          {authors.map((author, idx) => (
            <div key={`${author.author_id}-${idx}`}>
              <li className={sharedItemClasses}>
                <Link
                  href={`/author/${author.author_id}`}
                  className={imageWrapperClasses}
                >
                  <AuthorImage author_id={author.author_id} name={author.name} />
                </Link>
                <div className="flex flex-col justify-center">
                  <Link
                    href={`/author/${author.author_id}`}
                    className="text-2xl font-bold hover:text-blue transition-colors font-averia"
                  >
                    {author.name}
                  </Link>
                  <span className="text-sm text-foreground-muted ml-1">
                    ({author.work_count} works)
                  </span>
                </div>
              </li>
              <hr className="border-border-muted mx-5" />
            </div>
          ))}
        </ul>
      ) : (
        <p className="text-foreground-faint text-center">No authors found.</p>
      )}
    </section>
  );

  const FilterTabsMobile = () => (
    <div className="md:hidden mb-2 overflow-x-auto no-scrollbar">
      <div className="flex space-x-3 pb-2 px-2">
        {["books", "authors"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item as "books" | "authors")}
            className={`flex-shrink-0 px-2 py-1 rounded text-sm font-medium border transition-all whitespace-nowrap ${
              filter === item
                ? "bg-background-bright text-foreground border-background-brightest"
                : "bg-background-secondary border-border-default text-foreground-muted hover:bg-background-bright"
            }`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );

  const FilterSidebar = () => (
    <div className="hidden md:block w-full md:w-64 shrink-0 p-4 bg-background-secondary rounded border border-border-default h-fit">
      <h3 className="text-xs font-medium text-foreground-muted uppercase mb-3">
        Show results for
      </h3>
      <ul className="space-y-1 text-sm text-foreground-dim font-medium">
        {["books", "authors"].map((item) => (
          <li key={item}>
            <button
              onClick={() => setFilter(item as "books" | "authors")}
              className={`block w-full text-left px-2 py-1 rounded transition ${
                filter === item
                  ? "bg-background-bright text-foreground"
                  : "hover:bg-background-bright"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <main className="px-4 py-12 text-foreground flex flex-col md:flex-row gap-8">
      <div className="flex-1">
        <p className="text-sm text-foreground-muted uppercase py-2">
          Search results for &quot;{query}&quot;
        </p>
        <FilterTabsMobile />
        {loading ? (
          <p className="text-foreground-faint text-center">Searching...</p>
        ) : filter === "books" ? (
          renderBookList()
        ) : (
          renderAuthorList()
        )}
      </div>
      <FilterSidebar />
    </main>
  );
}
