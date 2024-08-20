import Link from "next/link";

export default function NavBar() {
    return (
        <div className="nav-container"r>
            <Link href="/trending" className="trending"> 
            <p>Trending Movies</p>
            </Link>
            <Link href="/theatre" className="theatre"> 
            <p>In Theatres</p>
            </Link>
            <Link href="/watchlist" className="profile">
            <p>Your Watchlist</p>
            </Link>
        </div>
        
    )
}