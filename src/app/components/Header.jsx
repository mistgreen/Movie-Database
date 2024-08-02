import Link from "next/link";

export default function Header() {
    return (
      <header>
        <div className="topbar">
          <Link href="/" className="logo">Movify</Link>
        </div>
      </header>
    );
  }
  