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

function ConditionalRendering() {
  return (
    <div>
      <h1>ConditionalRendering</h1>
    </div>
  )
}

export default ConditionalRendering