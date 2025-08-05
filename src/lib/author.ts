const apiURL = process.env.NEXT_PUBLIC_API_BASE_URL;

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
    const res = await fetch(`${apiURL}/author/${author_id}`, {
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
