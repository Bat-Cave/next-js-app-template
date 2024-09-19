"use client";

import { Spinner } from "@/components/spinner";
import { trpc } from "@/server/client";

export default function Example() {
  const { data: users, isLoading } = trpc.user.getUsers.useQuery();

  if (isLoading) {
    return <Spinner size={48} speed={800} />;
  }

  return (
    <div>
      {users?.map((user) => (
        <div key={user.id} className="flex gap-2 items-center">
          <p>{user.id}</p>
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  );
}
