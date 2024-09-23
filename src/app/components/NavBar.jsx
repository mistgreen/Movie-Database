'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState } from "react";

export default function NavBar() {
  const pathname = usePathname(); 
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav-container">
      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        {isOpen ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/>
          </svg> :
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
          </svg>}    
      </div>
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li>
          <Link href="/" className={pathname === "/" ? "active home" : "home"}>Home</Link>
        </li>
        <li>
          <Link href="/discover" className={pathname === "/discover" ? "active discover" : "discover"}>Discover</Link>
        </li>
        <li>
          <Link href="/theatre" className={pathname === "/theatre" ? "active theatre" : "theatre"}>In Theatres</Link>
        </li>
        <li>
          <Link href="/watchlist" className={pathname === "/watchlist" ? "active profile" : "profile"}>Watchlist</Link>
        </li>
      </ul>
    </nav>
  )
}
