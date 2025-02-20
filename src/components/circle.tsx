import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export const Circle = (props: ComponentPropsWithoutRef<"div">) => {
  const { className, children } = props;

  return (
    <div
      className={twMerge(
        "inline-flex size-[250px] items-center justify-center rounded-full bg-green-200 outline-6 -outline-offset-6 outline-green-500/20",
        className,
      )}
    >
      {children}
    </div>
  );
};
