"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function SearchInput() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-[200px]">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-black/60 pointer-events-none">
        <FaMagnifyingGlass />
      </span>
      <input
        type="text"
        id="search"
        name="q"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
        className="pl-10 pr-3 py-1 rounded-full bg-[#ddd] text-black placeholder:text-black/50 outline-none focus:outline-none focus:ring-0 focus:border-none w-full"
      />
    </form>
  );
}
