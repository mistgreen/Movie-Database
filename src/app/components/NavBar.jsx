import Link from "next/link";

export default function NavBar() {
    return (
        <div>
            <Link href="/trending" className="trending"> 
        <p>Trending Movies</p>
        </Link>
        <Link href="/cinema" className="cinema"> 
        <p>At the Cinema</p>
        </Link>
        <Link href="/theatrePage" className="theatre"> 
        <p>Theatre test</p>
        </Link>
        </div>
        
    )
}