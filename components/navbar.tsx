import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-b-white bg-black py-4">
      <div className="container mx-auto flex">
        <Link href="/" className="font-heading text-white">
          Tribe of Ghosts
        </Link>

        <nav className="font-heading text-white ml-auto">
          <a
            href="https://tribeofghosts.bandcamp.com/merch"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 text-white"
          >
            Merch
          </a>
          <Link href="/#contact" className="ml-4 text-white">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
