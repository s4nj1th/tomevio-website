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

  const renderResults = () => {
    if (loading) {
      return (
        <p className="text-foreground-muted text-center">
          Searching...
        </p>
      );
    }

    const sharedItemClasses =
      "flex gap-4 px-5 py-6 items-center transition hover:bg-background-bright rounded-md";

    const imageWrapperClasses =
      "w-[80px] h-[120px] flex items-center justify-center bg-gray-100 text-gray-600 text-[10px] shadow-shadow-hard overflow-hidden";

    const renderBookList = () => (
      <section className="mb-10">
        {books.length > 0 ? (
          <ul className="space-y-3">
            {books.map((book) => (
              <div key={book.work_id}>
                <li className={sharedItemClasses}>
                  <div className={imageWrapperClasses}>
                    {book.cover_id && book.cover_id > 0 ? (
                      <img
                        src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
                        alt={book.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div
                        className="text-center px-1 font-averia"
                      >
                        {book.title}
                        <br />({book.first_publish_year})
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col justify-center">
                    <Link
                      href={`/book/${book.work_id}`}
                      className="text-2xl font-bold hover:text-blue transition-colors font-averia"
                    >
                      {book.title}
                    </Link>
                    <span className="text-sm text-foreground-muted ml-1">
                      by {book.author_name?.join(", ") || "Unknown"} (
                      {book.first_publish_year || "n.d."})
                    </span>
                  </div>
                </li>
                <hr className="border-border-muted mx-5" />
              </div>
            ))}
          </ul>
        ) : (
          <p className="text-foreground-dim text-center">
            No books found.
          </p>
        )}
      </section>
    );

    const renderAuthorList = () => (
      <section className="mb-10">
        {authors.length > 0 ? (
          <ul className="space-y-3">
            {authors.map((author, idx) => (
              <div key={`${author.author_id}-${idx}`}>
                <li className={sharedItemClasses}>
                  <div className={imageWrapperClasses}>
                    <AuthorImage
                      author_id={author.author_id}
                      name={author.name}
                    />
                  </div>
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
          <p className="text-foreground-dim text-center">
            No authors found.
          </p>
        )}
      </section>
    );

    return filter === "books" ? renderBookList() : renderAuthorList();
  };

  const FilterDropdown = () => (
    <div className="md:hidden mb-4">
      <label
        htmlFor="filter-select"
        className="block text-xs text-[foreground-muted] uppercase mb-1 tracking-wide"
      >
        Show results for
      </label>
      <div className="relative">
        <select
          id="filter-select"
          value={filter}
          onChange={(e) => setFilter(e.target.value as "books" | "authors")}
          className="w-full appearance-none bg-[background-secondary] text-foreground font-semibold px-4 py-2 pr-10 rounded border border-border-default focus:outline-none"
        >
          <option value="books">Books</option>
          <option value="authors">Authors</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[foreground-muted]">
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
    <div className="hidden md:block w-full md:w-64 shrink-0 p-4 bg-[background-secondary] rounded border border-border-default h-fit">
      <h3 className="text-xs font-medium text-[foreground-muted] uppercase mb-3">
        Show results for
      </h3>
      <ul className="space-y-1 text-sm text-[foreground-dim] font-medium">
        {["books", "authors"].map((item) => (
          <li key={item}>
            <button
              onClick={() => setFilter(item as "books" | "authors")}
              className={`block w-full text-left px-2 py-1 rounded transition ${
                filter === item
                  ? "bg-[background-bright] text-foreground"
                  : "hover:bg-[background-bright]"
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
        <p className="text-sm text-[foreground-muted] uppercase py-2">
          Search results for &quot;{query}&quot;
        </p>
        <hr className="mb-6 border-[border-muted]" />
        <FilterDropdown />
        {renderResults()}
      </div>
      <FilterSidebar />
    </main>
  );
}
