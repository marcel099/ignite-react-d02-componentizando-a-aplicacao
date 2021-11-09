import { createContext, ReactNode, useEffect, useState } from 'react';

import { api } from '../services/api';

type MovieGenrerContextData = {
  selectedGenreId: number
  genres: GenreResponseProps[]
  movies: MovieProps[]
  selectedGenre: GenreResponseProps
  setSelectedGenreId: (genreId: number) => void
}

export const MovieGenrerContext = createContext({} as MovieGenrerContextData)

type MovieGenrerProviderProps = {
  children: ReactNode
}

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function MovieGenrerProvider(props: MovieGenrerProviderProps) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  return (
    <MovieGenrerContext.Provider value={{
      selectedGenre,
      genres,
      movies,
      selectedGenreId,
      setSelectedGenreId,
    }}>
      {props.children}
    </MovieGenrerContext.Provider>
  )
}