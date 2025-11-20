/* &&
true && tony -> tony
false && tony -> false
tony && '' -> ''
'' && tony -> ''
tony && lien && react -> react

||
'' || react -> react
react || tony || lien -> react
tony || '' -> tony
*/

import { useDispatch } from "react-redux"
import { setTheme } from "../../reduxs/app.actions";

function ConditionalRendering() {
  const dispatch = useDispatch();

  function updateTheme() {
    dispatch(setTheme('dark' + Date.now()))
  }

  return (
    <div>
      <h1>ConditionalRendering</h1>

      <button onClick={updateTheme}>Update theme</button>
    </div>
  )
}

export default ConditionalRendering