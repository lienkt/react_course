import MovieForm from './movieFilm/MovieForm'
import MovieList from './movieFilm/MovieList'
import MovieCount from './movieFilm/MovieCount'

function MovieFilm() {
  return (
    <div>
      <h1>Context MovieFilm</h1>

      <b>Movie List</b>

      <MovieForm />

      <br />

      <MovieCount />
      <br />
     
      <MovieList />
    </div>
  )
}

export default MovieFilm