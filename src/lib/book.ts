export type Book = {
  title: string
  description?: string
  authors: Author[],
  cover?: number;
}

type Author = {
    name: string,
    key: string,
}

export async function fetchBook(book_id: string): Promise<Book | null> {
  try {
    const res = await fetch(`http://localhost:8080/book/${book_id}`, {
    //   cache: 'no-store',
    })

    if (!res.ok) {
      console.error(`Failed to fetch book ${book_id}:`, res.status)
      return null
    }

    const data = await res.json()
    return data
  } catch (err) {
    console.error('Error fetching book:', err)
    return null
  }
}
