import React from 'react'
import { useNavigate } from 'react-router';

function Login() {
  const navigate = useNavigate();

  function onSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    navigate('/jsx');
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        email: <input type="text" /> <br />
        pass:  <input type="text" /> <br />
        <button>Submit</button>
      </form>
    
    </div>
  )
}

export default Login