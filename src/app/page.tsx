import PrefetchQuery from "@/components/prefetch-query";
import { QUERY_KEYS } from "@/data/react-query";
import { sampleFetch } from "@/functions/test";
import Example from "./example";

export default async function Home() {
  return (
    <PrefetchQuery queryKey={[QUERY_KEYS.SAMPLE]} queryFn={sampleFetch}>
      <Example />
    </PrefetchQuery>
  );
}
