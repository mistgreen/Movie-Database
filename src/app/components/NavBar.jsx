import Link from "next/link";

export default function NavBar() {
    return (
        <div>
            <Link href="/trending" className="trending"> 
            <p>Trending Movies</p>
            </Link>
            <Link href="/theatre" className="theatre"> 
            <p>In Theatres</p>
            </Link>
        </div>
        
    )
}