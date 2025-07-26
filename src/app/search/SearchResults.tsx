"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Book, Author, searchBooksAndAuthors } from "@/lib/search";

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

  const renderResults = () => {
    if (loading) {
      return (
        <p className="text-[var(--foreground-muted)] text-center">
          Searching...
        </p>
      );
    }

    if (filter === "books") {
      return (
        <section className="mb-10">
          {books.length > 0 ? (
            <ul className="space-y-3">
              {books.map((book) => (
                <div key={book.work_id}>
                  <li
                    key={book.work_id}
                    className="flex gap-4 px-5 py-6 items-center"
                  >
                    {book.cover_id && book.cover_id > 0 ? (
                      <img
                        src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
                        alt={`${book.title}`}
                        width="80"
                        height="120"
                        className="shadow-[var(--shadow-hard)] object-cover"
                      />
                    ) : (
                      <div
                        className="w-[80px] h-[120px] bg-gray-300 text-gray-600 text-[10px] flex items-center justify-center text-center px-1 shadow-[var(--shadow-hard)]"
                        style={{ fontFamily: "var(--font-averia)" }}
                      >
                        {book.title}
                        <br />
                        ({book.first_publish_year})
                      </div>
                    )}
                    <div className="flex flex-col justify-center">
                      <p
                        className="space-x-2 font-black"
                        style={{ fontFamily: "var(--font-averia)" }}
                      >
                        <Link
                          href={`/book/${book.work_id}`}
                          className="text-2xl hover:text-[var(--color-blue)] transition-colors"
                        >
                          {book.title}
                        </Link>
                        <span className="text-[var(--foreground-faint)] text-sm">
                          ({book.first_publish_year})
                        </span>
                      </p>
                      <p className="text-[var(--foreground-muted)] text-sm">
                        by {book.author_name?.join(", ") || "Unknown"}
                      </p>
                    </div>
                  </li>
                  <hr className="border-[var(--border-muted)] mx-5" />
                </div>
              ))}
            </ul>
          ) : (
            <p className="text-[var(--foreground-dim)] text-center">
              No books found.
            </p>
          )}
        </section>
      );
    }

    if (filter === "authors") {
      return (
        <section>
          <ul className="space-y-3">
            {authors.length > 0 ? (
              authors.map((author, idx) => (
                <li key={`${author.name}-${idx}`}>
                  <span className="font-medium text-[var(--foreground)]">
                    {author.name}
                  </span>
                  <span className="text-sm text-[var(--foreground-muted)] ml-2">
                    ({author.work_count} works)
                  </span>
                </li>
              ))
            ) : (
              <p className="text-[var(--foreground-dim)] text-center">
                No authors found.
              </p>
            )}
          </ul>
        </section>
      );
    }

    return null;
  };

  const FilterDropdown = () => (
    <div className="md:hidden mb-4">
      <label
        htmlFor="filter-select"
        className="block text-xs text-[var(--foreground-muted)] uppercase mb-1 tracking-wide"
      >
        Show results for
      </label>
      <div className="relative">
        <select
          id="filter-select"
          value={filter}
          onChange={(e) => setFilter(e.target.value as "books" | "authors")}
          className="w-full appearance-none bg-[var(--background-secondary)] text-[var(--foreground)] font-semibold px-4 py-2 pr-10 rounded border border-[var(--border-default)] focus:outline-none"
        >
          <option value="books">Books</option>
          <option value="authors">Authors</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[var(--foreground-muted)]">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );

  const FilterSidebar = () => (
    <div className="hidden md:block w-full md:w-64 shrink-0 p-4 bg-[var(--background-secondary)] rounded border border-[var(--border-default)] h-fit">
      <h3 className="text-xs font-medium text-[var(--foreground-muted)] uppercase mb-3">
        Show results for
      </h3>
      <ul className="space-y-1 text-sm text-[var(--foreground-dim)] font-medium">
        {["books", "authors"].map((item) => (
          <li key={item}>
            <button
              onClick={() => setFilter(item as "books" | "authors")}
              className={`block w-full text-left px-2 py-1 rounded transition ${
                filter === item
                  ? "bg-[var(--background-bright)] text-[var(--foreground)]"
                  : "hover:bg-[var(--background-bright)]"
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
    <main className="px-4 py-12 text-[var(--foreground)] flex flex-col md:flex-row gap-8">
      <div className="flex-1">
        <p className="text-sm text-[var(--foreground-muted)] uppercase py-2">
          Search results for &quot;{query}&quot;
        </p>
        <hr className="mb-6 border-[var(--border-muted)]" />
        <FilterDropdown />
        {renderResults()}
      </div>
      <FilterSidebar />
    </main>
  );
}
