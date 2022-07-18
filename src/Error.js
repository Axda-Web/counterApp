const logError = (error, errorInfo) => {
    console.log("logError:", error.message, errorInfo.componentStack);
}

function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div>
      <h2>An error was found!</h2>
      <p>Error: {error.message}</p>
      <button onClick={resetErrorBoundary}>Reset</button>
    </div>
  )
}

export { logError, ErrorFallback }