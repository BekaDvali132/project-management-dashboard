// Header.tsx
export default function Header() {
  return (
    <header className="h-[88px] flex justify-between">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">My Website</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-gray-300">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-300">About</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
