import { z } from "zod";
import { createRouter, publicProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";

const users = [
  {
    id: "1",
    name: "Alice",
    age: 30,
    email: "alice@example.com",
    favorite_color: "#ff0000",
  },
  {
    id: "2",
    name: "Bob",
    age: 25,
    email: "bob@example.com",
    favorite_color: "#00ff00",
  },
  {
    id: "3",
    name: "Charlie",
    age: 35,
    email: "charlie@example.com",
    favorite_color: "#0000ff",
  },
  {
    id: "4",
    name: "Dave",
    age: 40,
    email: "dave@example.com",
    favorite_color: "#ffff00",
  },
  {
    id: "5",
    name: "Eve",
    age: 45,
    email: "eve@example.com",
    favorite_color: "#00ffff",
  },
  {
    id: "6",
    name: "Faye",
    age: 50,
    email: "faye@example.com",
    favorite_color: "#ff00ff",
  },
  {
    id: "7",
    name: "Gabby",
    age: 55,
    email: "gabby@example.com",
    favorite_color: "#00ff00",
  },
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
