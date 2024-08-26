import { Spinner } from "@/components/spinner";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-24">
      <Spinner size={48} speed={800} />
    </div>
  );
}
