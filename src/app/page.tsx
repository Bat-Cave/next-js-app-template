import PrefetchQuery from "@/components/prefetch-query";
import { QUERY_KEYS } from "@/lib/react-query";
import { sampleFetch } from "@/functions";
import Example from "./example";
import { minDelay } from "@/lib/helpers";

export default async function Home() {
  return (
    <PrefetchQuery
      queryKey={[QUERY_KEYS.SAMPLE]}
      queryFn={async () => await minDelay(sampleFetch(), 3000)}
    >
      <Example />
    </PrefetchQuery>
  );
}
