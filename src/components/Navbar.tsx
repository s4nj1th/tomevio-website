import Link from "next/link";
import SearchInput from "./SearchInput";

export default function NavBar() {
  return (
    <nav className="bg-[var(--background-secondary)] text-white px-4 py-3 border-b-2 border-[var(--background-bright)] shadow-md">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <Link className="flex items-end" href={"/"}>
          <img
            src="/logo-light.svg"
            alt="Tomevio"
            className="h-10 w-auto dark:hidden"
          />
          <img
            src="/logo-dark.svg"
            alt="Tomevio"
            className="h-10 w-auto hidden dark:block"
          />
          <h1
            className="hidden md:block text-3xl font-bold text-[#f2f2f2]"
            style={{ fontFamily: "var(--font-averia)" }}
          >
            omevio
          </h1>
        </Link>

        <SearchInput />
      </div>
    </nav>
  );
}
