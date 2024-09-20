"use client"; // Error boundaries must be Client Components

import { Spinner } from "@/components/spinner";
import { useEffect, useState } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [retrying, setRetrying] = useState(false);

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <div className="flex gap-2 items-center">
        <button
          disabled={retrying}
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => {
              setRetrying(true);
              setTimeout(() => {
                reset();
                setRetrying(false);
              }, 3000);
            }
          }
        >
          {retrying ? <Spinner /> : "Try again"}
        </button>
        <button onClick={() => window.location.reload()}>Reload</button>
      </div>
    </div>
  );
}
