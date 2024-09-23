import Link from "next/link";
import NavBar from "./NavBar";
import Search from "./Search";

export default function Header() {
    return (
      <header>
        <div className="topbar">
          <div className="logo">
            <Link href="/" className="logo">MOVIES</Link> 
          </div>
          <div className="nav-bar-wrapper">
          <NavBar/> 
          </div>
        </div>
        <div className="search-wrapper">
            <Search/>
          </div> 
      </header>
    );
  }
  