export type Author = {
  name: string;
  bio?: string;
  works?: Work[];
  lifespan?: string;
};

type Work = {
  work_id: string;
  title: string;
};

export async function fetchAuthor(author_id: string): Promise<Author | null> {
  try {
    const res = await fetch(`http://localhost:8080/author/${author_id}`, {
      //   cache: 'no-store',
    });

    if (!res.ok) {
      console.error(`Failed to fetch author ${author_id}:`, res.status);
      return null;
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching author:", err);
    return null;
  }
}
