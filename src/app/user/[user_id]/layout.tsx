import Link from "next/link";

const UserPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Link href="/">Back</Link> {children}
    </div>
  );
};

export default UserPageLayout;
