import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export const Circle = (props: ComponentPropsWithoutRef<"div">) => {
  const { className, children } = props;

  return (
    <div
      className={twMerge(
        "inline-flex size-[250px] items-center justify-center rounded-full bg-gradient-to-br from-teal-100 to-green-100 outline-6 -outline-offset-6 outline-green-500/10",
        className,
      )}
    >
      {children}
    </div>
  );
};
