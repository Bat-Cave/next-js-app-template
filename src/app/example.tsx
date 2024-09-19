"use client";

import { QUERY_KEYS } from "@/lib/react-query";
import { sampleFetch } from "@/functions";
import { useQuery } from "@tanstack/react-query";
import { minDelay } from "@/lib/helpers";
import { format } from "date-fns";

export default function Example() {
  const { data, dataUpdatedAt, ...rest } = useQuery({
    queryKey: [QUERY_KEYS.SAMPLE],
    queryFn: () => minDelay(sampleFetch(), 3000),
  });

  console.log(rest);

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <p className="text-xs">Updated at: {format(dataUpdatedAt, "pp")}</p>
    </div>
  );
}
