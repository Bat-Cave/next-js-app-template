const TailwindIndicator = () => {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="fixed bottom-1 left-1 z-50 grid size-6 rounded-full bg-gray-800 p3 font-mono text-xs text-white *:transition-all *:duration-300 *:delay-300 *:size-full *:flex *:items-center *:justify-center">
      <div
        style={{ gridArea: "1/1" }}
        className="scale-100 opacity-100 sm:scale-0 sm:opacity-0"
      >
        xs
      </div>
      <div
        style={{ gridArea: "1/1" }}
        className="opacity-0 scale-0 sm:scale-100 md:scale-0 sm:opacity-100 md:opacity-0"
      >
        sm
      </div>
      <div
        style={{ gridArea: "1/1" }}
        className="opacity-0 md:opacity-100 lg:opacity-0 scale-0 md:scale-100 lg:scale-0"
      >
        md
      </div>
      <div
        style={{ gridArea: "1/1" }}
        className="opacity-0 lg:opacity-100 xl:opacity-0 scale-0 lg:scale-100 xl:scale-0"
      >
        lg
      </div>
      <div
        style={{ gridArea: "1/1" }}
        className="opacity-0 xl:opacity-100 2xl:opacity-0 scale-0 xl:scale-100 2xl:scale-0"
      >
        xl
      </div>
      <div
        style={{ gridArea: "1/1" }}
        className="opacity-0 scale-0 2xl:opacity-100 2xl:scale-100"
      >
        2xl
      </div>
    </div>
  );
};

export { TailwindIndicator };
