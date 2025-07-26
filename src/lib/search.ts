export type Book = {
  title: string;
  author_name: string[];
  work_id: string;
};

export type Author = {
  name: string;
  work_count: number;
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
