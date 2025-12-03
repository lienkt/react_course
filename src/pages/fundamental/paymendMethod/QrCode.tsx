import React from 'react'
import ErrorBoundaries from '../../../components/ErrorBoundaries';
import Button from '../../../components/Button';

function QrCode() {
  const [person, setPerson]  = React.useState('tony');

  function showError() {
    setPerson({})
  }

  return (
    <ErrorBoundaries>
      <Button buttonText="QrCode" onClick={showError} />
      Person: {person}
    </ErrorBoundaries>
  )
}

export default QrCode