import React from "react";

interface Movie {
  id: number,
  title: string
}

interface MovieContextProps {
  movies: Movie[],
  updateMovie: (title: string) => void
}

export const MovieContext = React.createContext<MovieContextProps>({
  movies: [],
  updateMovie: () => {}
});

export const MovieProvider = ({ children }: React.PropsWithChildren) => {
  const [movies, setMovies] = React.useState<Movie[]>([]);

  function updateMovie(title: string) {
    const newItem = {
      id: Date.now(),
      title
    };
    setMovies(prevState => [...prevState, newItem])
  }

  return (
    <MovieContext.Provider
      value={{
        movies,
        updateMovie
      }}
    >
      {children}
    </MovieContext.Provider>
  )
};

export const useMovieContext = () => React.useContext(MovieContext);