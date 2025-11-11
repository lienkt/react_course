import React from 'react'
import { useScreenWidth } from '../../hooks/useScreenWidth';

/*
- way to access react element
- update ref, it not cause component re-render
- alway keep information during lifycyle component (exception unmount)

useImperativeHandle
- expose function of child component that parent component can access.
*/

const ShowModal = ({ ref }: any) => {
  const [isShow, setIsShow] = React.useState(false);
  const [text, setText] = React.useState('');

  React.useImperativeHandle(ref, () => {
    return {
      firstName: 'tony',
      lastName: 'nguyen',
      setToggleModal: () => {
        setIsShow(prevState => !prevState)
      },
      titleModal: text
    }
  })

  return (
    <>
      {isShow && <div>this is modal</div>}
      Modal Input: <input type="text" onChange={e => setText(e.target.value)}  /> <br />
    </>
  )
}

function RefHook() {
  const { isScreenWidth } = useScreenWidth();
  
  const [timeStamp, setTimestamp] = React.useState(Date.now());
  let countRef = React.useRef(0);
  const showModalRef = React.useRef<any>(null);
  const isSkipFirstRender = React.useRef(true);
  const firstNameRef = React.useRef<HTMLInputElement | null>(null);

  function onSubmit() {
    countRef.current = countRef.current + 1;
    setTimestamp(Date.now());
    firstNameRef.current?.focus();
    firstNameRef.current?.setSelectionRange(0, firstNameRef.current.value.length);

    console.log('onSubmit: ', {
      firstName: firstNameRef.current?.value,
      titleModal: showModalRef.current.titleModal
    })
  }

  function controlModal() {
    showModalRef.current.setToggleModal();
    console.log('showModalRef: ', showModalRef)
  }

  React.useEffect(() => {
    // side effect call background api
    if (isSkipFirstRender.current) {
      isSkipFirstRender.current = false;
      return;
    }
    console.log('side effect call background api'); // skip side effect for 1st, start run when component re-render
  })
  console.log('RefHookRefHookRefHookRefHook')

 

  return (
    <div>
      <h1>RefHook</h1>
      Count: {countRef.current} <br />
      First Name:  <input type="text" ref={firstNameRef} /> <br />
      <ShowModal ref={showModalRef} /> <br />
      <button onClick={controlModal}>Show Modal</button>
      <button type="button" onClick={onSubmit}>Submit</button> <br />
      <br />
       This is viewport is: {isScreenWidth ? 'PC' : 'Mobile'}
    </div>
  )
}

export default RefHook