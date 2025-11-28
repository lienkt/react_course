import { Outlet, useNavigate } from "react-router"

function User() {
  const navigate = useNavigate();

  return (
    <div>
      First Name: tony <br />
      Last Name: Nguyen <br />

      <div>
        <button type="button" onClick={() => navigate('information')}>Information</button>
        <button type="button" onClick={() => navigate('bank')}>Setting bank</button>
        <button type="button" onClick={() => navigate('member')}>Member</button>
      </div>

      <div>
        <Outlet />
      </div>

    </div>
  )
}

export default User