import { useMovieContext } from '../../contexts/MovieContext'

function RenderingPath() {
  const { movies } = useMovieContext();

  return (
    <div>
      <h1>RenderingPath</h1>
      
      <div>
        <div className='boxRenderingPath box1' onClick={() => console.log('123')}>box1</div>
        <div className='boxRenderingPath box2'>box2</div>
        <br />
        This is total movies: {movies.length}
      </div>
    </div>
  )
}

export default RenderingPath