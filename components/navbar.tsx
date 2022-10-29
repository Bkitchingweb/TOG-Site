import Link from "next/link";

export default function Navbar() {
  return (
    <header className="container fixed inset-0 mx-auto flex py-4">
      <Link href="/" className="font-heading text-white">
        Tribe of Ghosts
      </Link>
    </header>
  );
}
