import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const listItems = [
  "Discover articulate examinations of key philosophical domains.",
  "Benefit from comprehensive explorations of diverse philosophical concepts.",
  "Unlock a deeper appreciation for the foundations of thought.",
];

export const FeatureGrid = () => {
  const globeRef = useRef(null);
  const { scrollYProgress: globeScrollYProgress } = useScroll({
    target: globeRef,
    offset: ["start end", "end start"],
  });
  const globeTranslateY = useTransform(
    globeScrollYProgress,
    [0, 1],
    [100, -100],
  );
  const globeRotate = useTransform(globeScrollYProgress, [0, 1], [20, -20]);

  const bookRef = useRef(null);
  const { scrollYProgress: bookScrollYProgress } = useScroll({
    target: globeRef,
    offset: ["start end", "end start"],
  });
  const bookTranslateY = useTransform(bookScrollYProgress, [0, 1], [100, -100]);
  const bookRotate = useTransform(bookScrollYProgress, [0, 1], [-30, 20]);

  return (
    <section className="overflow-x-clip py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8 sm:gap-16 md:gap-24">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="col-span-2">
              <h2 className="text-center font-sans text-4xl font-extrabold text-slate-800 sm:text-left md:text-5xl">
                Cultivate Philosophical Insights
              </h2>

              <p className="mt-8 text-center font-serif text-2xl text-slate-800 sm:text-left md:text-3xl">
                Wisecrust offers a platform for the exploration of profound
                philosophical concepts and their relevance to understanding
                existence.
              </p>

              <ul className="mt-8 flex flex-col gap-4">
                {listItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="inline-flex size-8 flex-shrink-0 items-center justify-center rounded-full outline-2 -outline-offset-2 outline-green-500/20">
                      <div className="size-1.5 rounded-full bg-green-500"></div>
                    </div>
                    <span className="font-serif text-xl text-slate-800 md:text-2xl">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:items-center md:gap-8">
                <button className="group relative inline-flex w-full cursor-pointer justify-center overflow-hidden px-4 py-2 font-semibold tracking-wide text-orange-500 uppercase transition-all duration-300 sm:w-auto">
                  <div className="absolute inset-0 outline-2 -outline-offset-2 outline-orange-500 transition-all duration-300 group-hover:bg-orange-500/10"></div>
                  <div className="absolute inset-0 -z-10 origin-left scale-x-0 transform bg-orange-500 transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
                  <span className="relative z-10 text-center leading-6 transition-colors duration-300 group-hover:text-white">
                    Explore Concepts
                  </span>
                </button>
                <button className="group relative flex h-[38px] cursor-pointer items-center font-sans font-semibold tracking-wide text-orange-500 uppercase transition-all duration-300 hover:text-orange-600">
                  Discover More
                  <span className="absolute -bottom-0 left-0 h-[2px] w-0 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </div>
            </div>

            <div className="hidden items-center justify-center md:flex">
              <motion.img
                src="/src/assets/illustrations/globe.png"
                alt="Globe"
                className="size-100 max-w-none"
                ref={globeRef}
                style={{
                  translateY: globeTranslateY,
                  rotate: globeRotate,
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="relative hidden items-center justify-center md:flex">
              <div className="absolute right-0">
                <motion.img
                  src="/src/assets/illustrations/books.png"
                  alt="Books"
                  className="size-100 max-w-none"
                  ref={bookRef}
                  style={{
                    translateY: bookTranslateY,
                    rotate: bookRotate,
                  }}
                />
              </div>
            </div>

            <div className="col-span-2">
              <h2 className="text-center font-sans text-4xl font-extrabold text-slate-800 sm:text-left md:text-5xl">
                Illuminate the Realm of Ideas
              </h2>

              <div className="mt-6 flex flex-col gap-6 text-center font-serif text-xl text-slate-800 sm:text-left md:text-2xl">
                <p>
                  Wisecrust is committed to encouraging a richer understanding
                  of philosophical ideas through offering clear and thoughtful
                  explorations of fundamental concepts.
                </p>
                <p>
                  The goal is to equip readers with frameworks to analyze
                  existential dilemmas, ethical challenges, and the evolving
                  human condition, encouraging reasoned dialogue over passive
                  acceptance.
                </p>
              </div>

              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-8">
                <button className="group relative inline-flex w-full cursor-pointer justify-center overflow-hidden px-4 py-2 font-semibold tracking-wide text-green-600 uppercase transition-all duration-300 sm:w-auto">
                  <div className="absolute inset-0 outline-2 -outline-offset-2 outline-green-600 transition-all duration-300 group-hover:bg-green-600/10"></div>
                  <div className="absolute inset-0 -z-10 origin-left scale-x-0 transform bg-green-600 transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
                  <span className="relative z-10 text-center leading-6 transition-colors duration-300 group-hover:text-white">
                    Explore Concepts
                  </span>
                </button>
                <button className="group relative flex h-[38px] cursor-pointer items-center font-sans font-semibold tracking-wide text-green-600 uppercase transition-all duration-300 hover:text-green-500">
                  Discover More
                  <span className="absolute -bottom-0 left-0 h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
