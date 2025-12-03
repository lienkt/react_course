import React from 'react'
import { createPortal } from 'react-dom';
import Dialog from '../../components/Dialog'
import Button from '../../components/Button';

function ReactPortal() {
  const [isOpen, setIsOpen] = React.useState(false);

  function toggleOpen() {
    setIsOpen(prevState => !prevState)
  }

  return (
    <div
      style={{ overflow: 'hidden'}}
    >
      ReactPortal
      <Button buttonText="Show Modal" onClick={toggleOpen} />

      {createPortal(
        <Dialog
          isOpen={isOpen}
          onCancel={toggleOpen}
        >
          this is form
        </Dialog>,
        document.body
      )}
     
    </div>
  )
}

export default ReactPortal