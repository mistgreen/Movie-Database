import Image from "next/image";
import styles from "./page.module.css";
import MovieList from "./components/MovieList";
import Header from "./components/Header"

export default function Home() {
  return (
    
    <main className={styles.main}>
      <header>
        <Header/>
      </header>
      <div className={styles.description}>
        <h2>
          Trending Movies
        </h2>
        <MovieList/>
      </div>
    </main>
  );
}
