import { trpc } from "@/server/server";
import { notFound } from "next/navigation";

const UserPage = async ({ params }: { params: { user_id: string } }) => {
  const user_id = params.user_id;
  if (!user_id) {
    notFound();
  }

  // Simulate a slow fetch with a chance to fail
  await new Promise((resolve, reject) =>
    setTimeout(() => {
      if (Math.random() < 0.3) {
        reject(new Error("Failed to fetch user"));
      }
      resolve(null);
    }, 3000)
  );

  const user = await trpc.user.getUser({ id: user_id });

  return <pre>{JSON.stringify(user, null, 2)}</pre>;
};

export default UserPage;
