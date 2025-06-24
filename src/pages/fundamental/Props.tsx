import Button from "../../components/Button"
import Personal from "../../components/Personal"


/*
destructuring object,
default value object
rest operator -> get all remains properties
spread operator -> dàn trải
rename properties

Notes: khi nội suy 1 function component react in jsx
- must have: <... />
- must write Pascal Case
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
    <div>
      <h1>Props</h1>

      <Personal 
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
    </div>
  )
}

export default Props