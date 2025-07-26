import { Metadata } from "next";
import SearchResults from "./SearchResults";

type Props = {
  searchParams: { q?: string };
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const query = typeof searchParams.q === "string" ? searchParams.q : "";
  return {
    title: query ? `Search results for "${query}" - Tomevio` : "Search - Tomevio",
  };
}

export default function SearchPage() {
  return <SearchResults />;
}
