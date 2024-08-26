// SERVER-SIDE ONLY
// This component is used to prefetch data for a query key.
// It is not used on the client.
// For client usage, use the following example:
//
// export default function Posts() {
//   This useQuery could just as well happen in some deeper
//   child to <Posts>, data will be available immediately either way
//   const { data } = useQuery({
//     queryKey: ['posts'],
//     queryFn: () => getPosts(),
//   })
//   ...
// }

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
  type QueryKey,
} from "@tanstack/react-query";

export default async function PrefetchQuery({
  queryKey,
  queryFn,
  children,
}: {
  queryKey: QueryKey;
  queryFn: () => Promise<any>;
  children?: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: queryKey,
    queryFn: queryFn,
  });

  return (
    // Neat! Serialization is now as easy as passing props.
    // HydrationBoundary is a Client Component, so hydration will happen there.
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
}
