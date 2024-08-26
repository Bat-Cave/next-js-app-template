"use client";

import { QUERY_KEYS } from "@/data/react-query";
import { minDelay, sampleFetch } from "@/functions";
import { useQuery } from "@tanstack/react-query";

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
