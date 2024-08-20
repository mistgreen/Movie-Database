import Link from "next/link";

export default function NavBar() {
    return (
        <div className="nav-container"r>
            <Link href="/" className="home"> 
            <p>Home</p>
            </Link>
            <Link href="/discover" className="discover"> 
            <p>Discover</p>
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