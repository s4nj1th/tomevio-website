import Link from "next/link";
import SearchInput from "./SearchInput";

export default function NavBar() {
  return (
    <nav className="bg-background-secondary text-white px-4 py-3 border-b-2 border-background-bright shadow-md">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <Link className="flex items-end" href={"/"}>
          <img
            src="/logo-dark.svg"
            alt="Tomevio"
            className="h-10 w-auto z-2"
          />
          <h1
            className="hidden md:block text-4xl text-[#f2f2f2] font-averia font-bold -ml-2.5"
          >
            omevio
          </h1>
        </Link>

        <SearchInput />
      </div>
    </nav>
  );
}
