import { useMovieContext } from '../../../contexts/MovieContext';

function MovieCount() {
  const { movies } = useMovieContext();

  return (
    <div>Total films: {movies.length}</div>
  )
} 

export default MovieCount