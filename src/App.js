import React, { useState, useEffect } from 'react';
import Movie from './components/Movie';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const SEARCH_API =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  //const movies = ['1', '2', '3', '4', 'five'];
  const [ movies, setMovies ] = useState([]);

 /*  useEffect(() => async () => {
    const moviesResp = await fetch(FEATURED_API);
    const moviesR = await moviesResp.json();
    setMovies(moviesR);
  }, []) */

  useEffect(() => {
    fetch(FEATURED_API).then(res => res.json())
    .then(data => {
      console.log(data);
      setMovies(data.results);
    })
  })

  return <div className="movie-container">
    { movies.length > 0 && movies.map(movie => (
      <Movie key={movie.id} {...movie} />
    ))}
  </div>
}

export default App;