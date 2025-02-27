import type { ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";

export const Tag = (
  props: ComponentPropsWithRef<"div"> & { color?: string },
) => {
  const { children, color, className } = props;

  return (
    <div
      className={twMerge(
        "inline-flex rounded-lg px-3 py-1.5 font-sans text-xs font-semibold tracking-wider uppercase sm:text-sm",
        color === "slate" && "bg-slate-600/15 text-slate-600",
        color === "gray" && "bg-gray-600/15 text-gray-600",
        color === "zinc" && "bg-zinc-600/15 text-zinc-600",
        color === "neutral" && "bg-neutral-600/15 text-neutral-600",
        color === "stone" && "bg-stone-600/15 text-stone-600",
        color === "red" && "bg-red-600/15 text-red-600",
        color === "orange" && "bg-orange-600/15 text-orange-600",
        color === "amber" && "bg-amber-600/15 text-amber-600",
        color === "yellow" && "bg-yellow-600/15 text-yellow-600",
        color === "lime" && "bg-lime-600/15 text-lime-600",
        color === "green" && "bg-green-600/15 text-green-600",
        color === "emerald" && "bg-emerald-600/15 text-emerald-600",
        color === "teal" && "bg-teal-600/15 text-teal-600",
        color === "cyan" && "bg-cyan-600/15 text-cyan-600",
        color === "sky" && "bg-sky-600/15 text-sky-600",
        color === "blue" && "bg-blue-600/15 text-blue-600",
        color === "indigo" && "bg-indigo-600/15 text-indigo-600",
        color === "violet" && "bg-violet-600/15 text-violet-600",
        color === "purple" && "bg-purple-600/15 text-purple-600",
        color === "fuchsia" && "bg-fuchsia-600/15 text-fuchsia-600",
        color === "pink" && "bg-pink-600/15 text-pink-600",
        color === "rose" && "bg-rose-600/15 text-rose-600",
        className,
      )}
    >
      {children}
    </div>
  );
};
