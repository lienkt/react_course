import React from 'react';
import Button from '../../../components/Button'
import { useMovieContext } from '../../../contexts/MovieContext';

function MovieForm() {
  const [title, setTitle] = React.useState('');
  const { updateMovie } = useMovieContext();
  
  return (
    <div>
      Title: <input type="text" onChange={e => setTitle(e.target.value)} />
      <Button buttonText="Add movie" onClick={() => updateMovie(title)}/>
    </div>
  )
}

export default MovieForm