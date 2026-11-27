import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Ready PH home">
          Ready <span>PH</span>
        </Link>
        <nav aria-label="Main navigation">
          <ul className="nav-list">
            <li>
              <Link className="nav-home" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-guide" href="/guide">
                Guide
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
