import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-gray-200 text-black px-100">
      {/* Logo */}
      <div className="text-lg font-bold">🚀</div>

      {/* Menú */}
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="hover:text-gray-300 ">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-300 ">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-300 ">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
