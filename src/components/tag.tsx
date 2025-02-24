import type { ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";

export const Tag = (
  props: ComponentPropsWithRef<"div"> & { color?: string },
) => {
  const { children, color, className } = props;

  return (
    <div
      className={twMerge(
        "inline-flex rounded-lg px-3 py-1.5 font-sans text-base font-semibold tracking-wider uppercase sm:text-sm",
        color === "emerald" && "bg-emerald-600/15 text-emerald-600",
        color === "blue" && "bg-blue-600/15 text-blue-600",
        color === "teal" && "bg-teal-600/15 text-teal-600",
        color === "sky" && "bg-sky-600/15 text-sky-600",
        color === "cyan" && "bg-cyan-600/15 text-cyan-600",
        color === "indigo" && "bg-indigo-600/15 text-indigo-600",
        className,
      )}
    >
      {children}
    </div>
  );
};
