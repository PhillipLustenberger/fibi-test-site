export default function Layout({ children }) {
    return (
      <div>
        <nav className="p-4 bg-black text-white">
          <ul className="flex space-x-4">
            <li><a href="/">Home2</a></li>
            <li><a href="/about">Über mich</a></li>
            <li><a href="/contact">Kontakt</a></li>
          </ul>
        </nav>
        <main>{children}</main>
      </div>
    );
  }
  