'use client';
import Link from "next/link";

import { useState, useEffect } from "react";

export default function Search() {

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`
    }
  };
  
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const fetchData = async (query) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setData(Array.isArray(result.results) ? result.results : []); 
      setError(""); 
    } catch (error) {
      setError("An error occurred while fetching data. Please try again.");
    }
  };


  const onChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    fetchData(newValue);
  };

  return (
    <div className="search-container">
    <div className="search">
      <div className="search-form">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
        </svg>
        <input 
          type="text" 
          placeholder="Type to search..." 
          onChange={onChange} 
          value={value} 
        />
        <Link href={`/search?query=${value}`}>
        <button>Search</button>
        </Link>
      </div>
        {value.length > 0 && (
        <div className="drop-down" style={{ border: '1px solid #ccc', marginTop: '5px', padding: '10px' }}>
          {data.length > 0 ? (data.map(movie => (
                  
            <div key={movie.id}><Link href={`/${movie.id}`}>
              {movie.title}</Link>
            </div>
          ))) : 
          (
            <div>No results found</div>
          )}
        </div>
        )}
    </div>
    </div>
  );
}
