import Button from "../../components/Button"
import Dialog from "../../components/Dialog"
import Personal from "../../components/Personal"


/*
destructuring object,
default value object
rest operator -> get all remains properties
spread operator -> dàn trải
rename properties

Notes: khi nội suy 1 function component react in jsx
- must have: <... />
- must write PascalCase
*/

function Typography() {
  return (
    <div>this is Typography</div>
  )
}

function Props() {
  const todo = {
    title: 'react',
    status: 'new'
  }

  return (
    <div key={1}>
      <h1>Props</h1>

      <Personal 
        key={2}
        firstName="tony" // string
        age={18} // number 
        isLoading
        isMale // boolean
        colors={['blue', 'yellow']} // array
        user={{
          firstName: 'react'
        }} // object
        onClick={() => {}} // function  
        name-bird="edge" // string 
        component1={Typography} // react element type
        component2={<Typography />} // react node
        {...todo}
      >
        this is children
      </Personal> 

      <br />
      Demo: rest + spread operator 
      <Button 
        buttonText="Submit"
        className="abc"
        onClick={() => {}}
        type="button"
        onBlur={() => {}}
        tabIndex={1}
      />

      <Dialog 
        title="Delete"
      >
        Are you sure delete item?. Can not undo when you
      </Dialog>


      <Dialog 
        title="Edit Profile"
      >
        <label>First Name</label>
        <input type="text" />
      </Dialog>
    </div>
  )
}

export default Props