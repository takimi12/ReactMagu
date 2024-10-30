// components/ErrorBoundary.tsx
import { ReactNode } from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert">
      <p>Wystąpił błąd:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Spróbuj ponownie</button>
    </div>
  );
}

interface AppErrorBoundaryProps {
  children: ReactNode;
}

export function AppErrorBoundary({ children }: AppErrorBoundaryProps) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // Resetuj stan aplikacji po błędzie, jeśli potrzeba
      }}
    >
      {children}
    </ErrorBoundary>
  );
}
