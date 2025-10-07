import React from 'react'

/*
uncontroller input/form/component
- Uncontrolled inputs are like traditional HTML form inputs:
- They remember what you typed. You can then get their value using a ref.
- Don’t cause re-render component.
- The input value is not being managed by React.
- We are using DOM manipulation to access and manipulate the value of the input element.

controller input/form/component
- The value is handled by the react state.
- cause re-render component.

react hook form/formik + yup/zod
*/

function Form() {
  const firstNameRef = React.useRef<HTMLInputElement | null>(null);
  const [lastName, setLastName] = React.useState('');

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log('onSubmit: ', {
      firstName: firstNameRef.current?.value,
      lastName
    })
  }

  console.log('form render')
  return (
    <div>
      <h1>Form</h1>

      <form onSubmit={onSubmit}>
        First Name: <input type="text" id="firstName" ref={firstNameRef} /> <br />
        Last Name: <input type="text" id="lastName" value={lastName} onChange={e => setLastName(e.target.value)} /> <br />
        <button>Submit</button>
      </form>

    </div>
  )
}

export default Form