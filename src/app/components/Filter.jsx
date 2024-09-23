'use client';

import { useEffect, useState } from 'react';
import GenrePill from "./GenrePill";

export default function Filter() {
  const [genres, setGenres] = useState([]);  
  const [loading, setLoading] = useState(true);

  const [isOpen, setIsOpen] = useState(true);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en-US`, {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
          },
        });
        
        if (response.ok) {
          const data = await response.json();
          setGenres(data.genres);  
        } else {
          console.error('Failed to fetch genres');
        }
      } catch (error) {
        console.error('Error fetching genres:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGenres();
  }, []);

  // if (loading) {
  //   return <div>Loading genres...</div>;
  // }

  // if (!genres || genres.length === 0) {
  //   return <div>No genres available</div>;  
  // }

  return (
    <div className="filter-container">
      <div className={`filter-arrow ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
      {isOpen ? 
      <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"/></svg>
      :
      <svg className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/>
      </svg> 
      }
      </div>
      <div className={`genre-list ${isOpen ? 'active' : ''}`}>
        {genres.map((genre) => (
          <GenrePill className="genre-pill" key={genre.id} {...genre} />
        ))}
      </div>
    </div>
  );
}
