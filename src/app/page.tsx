import PrefetchQuery from "@/components/prefetch-query";
import { QUERY_KEYS } from "@/data/react-query";
import { minDelay, sampleFetch } from "@/functions";
import Example from "./example";

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
