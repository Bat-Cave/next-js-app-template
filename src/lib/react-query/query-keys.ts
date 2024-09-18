const QUERY_KEYS = {
  SAMPLE: "sample",
} as const;

type QueryKeys = keyof typeof QUERY_KEYS;

export { QUERY_KEYS };
export type { QueryKeys };
