'use client';

import { useEffect, useState } from 'react';
import GenrePill from "./GenrePill";

export default function Filter() {
  const [genres, setGenres] = useState([]);  
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <div>Loading genres...</div>;
  }

  if (!genres || genres.length === 0) {
    return <div>No genres available</div>;  
  }

  return (
    <div className="genre-list">
      {genres.map((genre) => (
        <GenrePill className="genre-pill" key={genre.id} {...genre} />
      ))}
    </div>
  );
}
