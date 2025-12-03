import React from 'react'
import { ErrorBoundary } from "react-error-boundary";

function ErrorBoundaries({ children }: React.PropsWithChildren) {

  function FallbackUI() {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre style={{ color: "red" }}>Page maintaince</pre>
      </div>
    )
  }

  return (
    <ErrorBoundary fallback={<FallbackUI />}>
      {children}
    </ErrorBoundary>
  )
}

export default ErrorBoundaries