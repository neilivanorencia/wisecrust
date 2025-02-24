import type { ComponentPropsWithoutRef } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

export const Card = (
  props: ComponentPropsWithoutRef<"div"> & {
    color?: string;
    buttonText?: string;
  },
) => {
  const { buttonText, children, className, color } = props;
  return (
    <div className={twMerge("group relative z-0 p-8 sm:p-10", className)}>
      <div
        className={twMerge(
          "absolute top-1.5 right-1.5 -z-10 size-16 rounded-xl opacity-0 blur-sm transition duration-300 group-hover:opacity-100",
          color === "emerald" && "bg-emerald-500",
          color === "blue" && "bg-blue-500",
          color === "teal" && "bg-teal-500",
          color === "sky" && "bg-sky-500",
          color === "cyan" && "bg-cyan-500",
          color === "indigo" && "bg-indigo-500",
        )}
      />

      <div
        className={twMerge(
          "absolute top-1.5 right-1.5 -z-10 size-16 rounded-xl transition duration-300",
          color === "emerald" && "bg-emerald-500 group-hover:bg-emerald-400",
          color === "blue" && "bg-blue-500 group-hover:bg-blue-400",
          color === "teal" && "bg-teal-500 group-hover:bg-teal-400",
          color === "sky" && "bg-sky-500 group-hover:bg-sky-400",
          color === "cyan" && "bg-cyan-500 group-hover:bg-cyan-400",
          color === "indigo" && "bg-indigo-500 group-hover:bg-indigo-400", // Add this line
        )}
      />

      <div className="absolute inset-0 -z-10 rounded-2xl bg-green-300 [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]" />

      <div>{children}</div>

      <div className="mt-12 flex justify-between">
        <button
          className={twMerge(
            "group relative flex h-[38px] cursor-pointer items-center font-sans font-bold tracking-wide uppercase transition-all duration-300",
            color === "emerald" && "text-emerald-500 hover:text-emerald-400",
            color === "blue" && "text-blue-500 hover:text-blue-400",
            color === "teal" && "text-teal-500 hover:text-teal-400",
            color === "sky" && "text-sky-500 hover:text-sky-400",
            color === "cyan" && "text-cyan-500 hover:text-cyan-400",
            color === "indigo" && "text-indigo-500 hover:text-indigo-400", // Add this line
          )}
        >
          {buttonText || "Learn More"}
          <span
            className={twMerge(
              "absolute -bottom-0 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full",
              color === "emerald" && "bg-emerald-500",
              color === "blue" && "bg-blue-500",
              color === "teal" && "bg-teal-500",
              color === "sky" && "bg-sky-500",
              color === "cyan" && "bg-cyan-500",
              color === "indigo" && "bg-indigo-500",
            )}
          ></span>
        </button>

        <HiOutlineArrowNarrowRight className="size-8 -translate-x-2 text-slate-800 transition duration-300 group-hover:translate-x-0 group-hover:text-slate-600" />
      </div>
    </div>
  );
};
