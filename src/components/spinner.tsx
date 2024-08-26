import type { CSSProperties } from "react";

export function Spinner({
  size = 18,
  speed = 800,
  className,
}: {
  size?: number;
  speed?: number;
  className?: string;
}) {
  return (
    <span
      className={className}
      style={
        {
          "--spinner-animation-duration": `${speed}ms`,
          "--spinner-opacity": 0.65,
          "--spinner-size": `${size}px`,

          display: "block",
          position: "relative",
          opacity: "var(--spinner-opacity)",
          width: "var(--spinner-size)",
          height: "var(--spinner-size)",
        } as CSSProperties
      }
    >
      <span className="rt-SpinnerLeaf" />
      <span className="rt-SpinnerLeaf" />
      <span className="rt-SpinnerLeaf" />
      <span className="rt-SpinnerLeaf" />
      <span className="rt-SpinnerLeaf" />
      <span className="rt-SpinnerLeaf" />
      <span className="rt-SpinnerLeaf" />
      <span className="rt-SpinnerLeaf" />
    </span>
  );
}
