import React from 'react'
import ErrorBoundaries from '../../../components/ErrorBoundaries';
import Button from '../../../components/Button';

function Bank() {
  const [person, setPerson]  = React.useState('tony');

  function showError() {
    setPerson({})
  }

  return (
    <ErrorBoundaries>
      <Button buttonText="Bank" onClick={showError} />
      Person: {person}
    </ErrorBoundaries>
  )
}

export default Bank