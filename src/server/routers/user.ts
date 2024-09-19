import { z } from "zod";
import { createRouter, publicProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";

type User = {
  id: string;
  name: string;
};

const users: Array<User> = [
  { id: "1", name: "Alice" },
  { id: "2", name: "Bob" },
  { id: "3", name: "Charlie" },
  { id: "4", name: "Dave" },
  { id: "5", name: "Eve" },
  { id: "6", name: "Faye" },
  { id: "7", name: "Gabby" },
];

export const userRouter = createRouter({
  getUsers: publicProcedure.query(() => {
    return users;
  }),
  getUser: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(({ input }) => {
      const user = users.find((user) => user.id === input.id);
      if (!user) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: `User with id ${input.id} not found`,
        });
      }
      return user;
    }),
  deleteUser: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(({ input }) => {
      const user = users.find((user) => user.id === input.id);
      if (!user) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: `User with id ${input.id} not found`,
        });
      }
      users.splice(users.indexOf(user), 1);
      return user;
    }),
  editUser: publicProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string(),
      })
    )
    .mutation(({ input }) => {
      const user = users.find((user) => user.id === input.id);
      if (!user) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: `User with id ${input.id} not found`,
        });
      }
      user.name = input.name;
      return user;
    }),
});
