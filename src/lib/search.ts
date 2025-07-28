export type Book = {
  title: string;
  authors: string[][],
  // work_id: string;
  id: string;
  publish_date: string;
  number_of_pages: number;
  cover: number;
};

export type Author = {
  name: string;
  work_count: number;
  author_id: string;
};

export async function searchBooksAndAuthors(query: string): Promise<{
  books: Book[];
  authors: Author[];
}> {
  try {
    const res = await fetch(`http://localhost:8080/search?q=${encodeURIComponent(query)}`, {
    //   cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch");

    const data = await res.json();
    return {
      books: data.books || [],
      authors: data.authors || [],
    };
  } catch (error) {
    console.error("API error:", error);
    return { books: [], authors: [] };
  }
}
