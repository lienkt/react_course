import { useMovieContext } from '../../../contexts/MovieContext'

function MovieList() {
  const { movies } = useMovieContext();

  return (
    <ul>
      {movies.map(item => (
        <li key={item.id}>
          Name: {item.title}
        </li>
      ))}
    </ul>
  )
}

export default MovieList