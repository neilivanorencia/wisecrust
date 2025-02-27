import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { Circle } from "@/src/components/circle";
import { Hexagon } from "@/src/components/hexagon";

export const HeroSection = () => {
  const rotationRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: rotationRef,
    offset: ["start end", "end start"],
  });

  const illustrationsRotate = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const floatingTransition = {
    duration: 2,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  } as const;

  return (
    <section className="overflow-x-clip py-36 md:py-54">
      <div className="container mx-auto px-4">
        <div className="relative z-10">
          <p className="text-center text-lg font-bold tracking-wider text-slate-600 uppercase">
            Haven for Curious Minds
          </p>

          <h1 className="mx-auto mt-4 max-w-2xl text-center text-5xl leading-14 font-extrabold text-slate-800 md:text-6xl">
            Lighting Lamps in the Labyrinth of Life
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-center font-serif text-2xl text-slate-700 md:text-3xl">
            Establishing insightful reflection through profound concepts
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="/articles"
              className="group relative cursor-pointer overflow-hidden px-4 py-2 font-semibold tracking-wide uppercase transition-all duration-300"
            >
              <div className="absolute inset-0 outline-2 -outline-offset-2 outline-green-700 transition-all duration-300 group-hover:bg-green-700/10"></div>
              <div className="absolute inset-0 -z-10 origin-left scale-x-0 transform bg-green-700 transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
              <span className="relative z-10 leading-6 text-green-700 transition-colors duration-300 group-hover:text-white">
                Explore Now
              </span>
            </a>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="relative z-0 inline-flex h-[250px] w-full max-w-xl md:h-[500px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon className="hidden md:block" size={1100} />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon
                className="hidden md:block"
                duration={50}
                size={1800}
                reverse
              />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle
                animate
                className="absolute top-[-825px] left-[275px] hidden md:inline-flex"
              >
                <motion.img
                  src="/src/assets/illustrations/abacus.png"
                  alt="Abacus"
                  className="size-[150px]"
                  ref={rotationRef}
                  style={{
                    rotate: illustrationsRotate,
                  }}
                />
              </Circle>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute -top-[80px] -left-[605px] hidden md:inline-flex">
                <motion.img
                  src="/src/assets/illustrations/art.png"
                  alt="Art"
                  className="size-[150px]"
                  ref={rotationRef}
                  style={{
                    rotate: illustrationsRotate,
                  }}
                />
              </Circle>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle
                animate
                className="absolute top-[270px] left-[190px] hidden md:inline-flex"
              >
                <motion.img
                  src="/src/assets/illustrations/clock.png"
                  alt="Clock"
                  className="size-[150px]"
                  ref={rotationRef}
                  style={{
                    rotate: illustrationsRotate,
                  }}
                />
              </Circle>
            </div>

            <motion.img
              src="/src/assets/illustrations/reading.png"
              alt="Book"
              className="absolute top-1/2 left-1/2 h-auto w-auto max-w-[80%] -translate-x-1/2 -translate-y-1/2 object-contain"
              animate={{
                y: [0, "-5%"],
              }}
              transition={floatingTransition}
            />
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-center gap-4 md:mt-80">
          <div className="inline-flex h-10 w-5 justify-center rounded-full pt-2 outline-4 outline-green-500/10">
            <motion.div
              animate={{
                translateY: 12,
                opacity: 0,
              }}
              transition={{
                duration: 2,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="h-3 w-1 rounded-full bg-green-400"
            />
          </div>
          <p className="text-center font-sans font-bold tracking-wide text-green-500/50 uppercase">
            Scroll for More Information
          </p>
        </div>
      </div>
    </section>
  );
};
