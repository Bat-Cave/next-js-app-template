// Defining new routers: https://trpc.io/docs/server/routers
// Merging routers: https://trpc.io/docs/server/merging-routers

import { createRouter, publicProcedure } from "../trpc";
import { userRouter } from "./user";

export const appRouter = createRouter({
  ping: publicProcedure.query(() => {
    return "pong";
  }),
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
