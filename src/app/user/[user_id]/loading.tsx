import { Spinner } from "@/components/spinner";

const Loading = () => {
  return (
    <div>
      <p>Loading...</p>
      <Spinner size={48} speed={800} />
    </div>
  );
};

export default Loading;
