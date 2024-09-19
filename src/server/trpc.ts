import { initTRPC } from "@trpc/server";
import { cache } from "react";

export const createTRPCContext = cache(async () => {
  /**
   * @see: https://trpc.io/docs/server/context
   */
  return {};
});
/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.create();
/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const createRouter = t.router;
export const publicProcedure = t.procedure;
export const createCallerFactory = t.createCallerFactory;
