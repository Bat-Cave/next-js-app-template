// Note to dev:
// Define a query key for each async query. These keys should be used in
// the queryKey prop of the useQuery hook.

const QUERY_KEYS = {
  SAMPLE: "sample",
} as const;

type QueryKeys = keyof typeof QUERY_KEYS;

export { QUERY_KEYS };
export type { QueryKeys };
