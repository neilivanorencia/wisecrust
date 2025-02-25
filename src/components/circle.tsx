import { motion } from "framer-motion";

import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export const Circle = (
  props: ComponentPropsWithoutRef<"div"> & { animate?: boolean },
) => {
  const { animate = false, className, children } = props;

  return (
    <div
      className={twMerge(
        "relative inline-flex size-[250px] items-center justify-center rounded-full bg-green-200",
        className,
      )}
    >
      <motion.div
        animate={
          animate && {
            rotate: 360,
          }
        }
        transition={{
          ease: "linear",
          duration: 10,
          repeat: Infinity,
        }}
        className={twMerge(
          "absolute inset-0 rounded-full border-[6px] border-transparent outline-6 -outline-offset-6 outline-green-500/20",
          animate && "border-t-green-400",
        )}
      />
      {children}
    </div>
  );
};
