// 'use client'

// import { useState, useEffect } from 'react';

// export default function useFavourites() {
//   const [favourites, setFavourites] = useState([]);

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       const savedFavourites = localStorage.getItem('favourites');
//       if (savedFavourites) {
//         setFavourites(JSON.parse(savedFavourites));
//       }
//     }
//   }, []);

//   const addFavourite = (movie) => {
//     const savedFavourites = localStorage.getItem('favourites');
//     let updatedFavourites = savedFavourites ? JSON.parse(savedFavourites) : [];
//     updatedFavourites = [...updatedFavourites, movie];
//     setFavourites(updatedFavourites);
//     localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
//   };

//   const removeFavourite = (movieId) => {
//     const savedFavourites = localStorage.getItem('favourites');
//     let updatedFavourites = savedFavourites ? JSON.parse(savedFavourites) : [];
//     updatedFavourites = updatedFavourites.filter(movie => movie.id !== movieId);
//     setFavourites(updatedFavourites);
//     localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
//   };

//   return {favourites, addFavourite, removeFavourite};
// }
