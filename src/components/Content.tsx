import { useContext } from 'react';

import { MovieGenrerContext } from '../contexts/MovieGenrer';

import { Header } from './Header';
import { MovieCard } from './MovieCard';

export function Content() {
  const {
    movies,
  } = useContext(MovieGenrerContext)

  return (
    <div className="container">
      <Header />

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}