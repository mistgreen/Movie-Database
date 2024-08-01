import Link from "next/link";
import Search from "./Search";

export default function Header() {
    return (
      <header>
        <div className="topbar">
          <Link href="/" className="logo">Movify</Link>
          <Search/>
        </div>
      </header>
    );
  }
  