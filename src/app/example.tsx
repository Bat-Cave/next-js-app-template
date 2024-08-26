"use client";

import { QUERY_KEYS } from "@/data/react-query";
import { sampleFetch } from "@/functions/test";
import { useQuery } from "@tanstack/react-query";

export default function Example() {
  const { data } = useQuery({
    queryKey: [QUERY_KEYS.SAMPLE],
    queryFn: () => sampleFetch(),
  });

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
