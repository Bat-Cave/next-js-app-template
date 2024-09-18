"use client";

import { QUERY_KEYS } from "@/lib/react-query";
import { sampleFetch } from "@/functions";
import { useQuery } from "@tanstack/react-query";
import { minDelay } from "@/lib/helpers";

export default function Example() {
  const { data } = useQuery({
    queryKey: [QUERY_KEYS.SAMPLE],
    queryFn: () => minDelay(sampleFetch(), 3000),
  });

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
