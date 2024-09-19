import { trpc } from "@/server/server";
import Example from "./example";

export default async function Home() {
  void trpc.user.getUsers.prefetch();
  return <Example />;
}
