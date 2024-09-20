'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function NavBar() {
    const pathname = usePathname(); 

    return (
        <div className="nav-container">
            <Link href="/" className={pathname === "/" ? "active home" : "home"}>
                <p>Home</p>
            </Link>
            <Link href="/discover" className={pathname === "/discover" ? "active discover" : "discover"}>
                <p>Discover</p>
            </Link>
            <Link href="/theatre" className={pathname === "/theatre" ? "active theatre" : "theatre"}>
                <p>In Theatres</p>
            </Link>
            <Link href="/watchlist" className={pathname === "/watchlist" ? "active profile" : "profile"}>
                <p>Your Watchlist</p>
            </Link>
        </div>
    );
}
