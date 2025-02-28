import { useEffect, useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

import deskLampImage from "@/src/assets/illustrations/desk-lamp.png";
import whiteboardImage from "@/src/assets/illustrations/whiteboard.png";
import stationeryImage from "@/src/assets/illustrations/stationery.png";
import diplomaImage from "@/src/assets/illustrations/diploma.png";
import lockerImage from "@/src/assets/illustrations/locker.png";

const cardData = [
  {
    image: deskLampImage,
    title: "Existentialism",
    description:
      "Existentialism posits that existence precedes essence, meaning individuals are born into the world without pre-defined purpose or nature.",
    color: "emerald",
  },
  {
    image: whiteboardImage,
    title: "Nihilism",
    description:
      "Nihilism is a philosophical concept that fundamentally questions the existence of objective meaning, value, and truth. ",
    color: "blue",
  },
  {
    image: stationeryImage,
    title: "Idealism",
    description:
      "Idealism asserts that the nature of this world is fundamentally shaped by, or reducible to, mind, spirit, or consciousness.",
    color: "teal",
  },
  {
    image: diplomaImage,
    title: "Solipsism",
    description:
      "Solipsism is a philosophical proposition that posits the potential singularity of consciousness.",
    color: "sky",
  },
  {
    image: lockerImage,
    title: "Memento Mori",
    description:
      "Memento mori, Latin for 'remember you must die,' serves as a potent reminder of the finite nature of human existence.",
    color: "cyan",
  },
];

export const FeatureCards = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  useEffect(() => {
    if (isMobile || isHovered) {
      return;
    }

    const timeout = setTimeout(() => {
      setSelectedCardIndex((current) =>
        current === cardData.length - 1 ? 0 : current + 1,
      );
    }, 4000);

    return () => {
      clearTimeout(timeout);
    };
  }, [selectedCardIndex, isMobile, isHovered]);

  return (
    <section className="-mt-24 overflow-x-clip py-4 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="mx-auto max-w-4xl text-center font-sans text-4xl font-extrabold text-slate-800 sm:text-5xl">
          Explore the Frontiers of Thought with Wisecrust
        </h2>

        <div className="mt-32 flex px-4 max-sm:justify-center">
          <div className="flex flex-none gap-8 max-sm:[&>*]:hidden max-sm:[&>*:first-child]:block">
            {cardData.map(({ image, title, description, color }, index) => (
              <div
                className="inline-flex transition-all duration-500"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={
                  !isMobile
                    ? {
                        transform: `translateX(calc((-100% - 2rem) * ${selectedCardIndex}))`,
                      }
                    : {}
                }
              >
                <div
                  key={title}
                  className="group relative z-0 max-w-xs p-8 sm:max-w-sm sm:p-10"
                  color={color}
                >
                  <div
                    className={twMerge(
                      "absolute top-1.5 right-1.5 -z-10 size-16 rounded-xl opacity-0 blur-sm transition duration-300 group-hover:opacity-100",
                      color === "slate" && "bg-slate-500",
                      color === "gray" && "bg-gray-500",
                      color === "zinc" && "bg-zinc-500",
                      color === "neutral" && "bg-neutral-500",
                      color === "stone" && "bg-stone-500",
                      color === "red" && "bg-red-500",
                      color === "orange" && "bg-orange-500",
                      color === "amber" && "bg-amber-500",
                      color === "yellow" && "bg-yellow-500",
                      color === "lime" && "bg-lime-500",
                      color === "green" && "bg-green-500",
                      color === "emerald" && "bg-emerald-500",
                      color === "teal" && "bg-teal-500",
                      color === "cyan" && "bg-cyan-500",
                      color === "sky" && "bg-sky-500",
                      color === "blue" && "bg-blue-500",
                      color === "indigo" && "bg-indigo-500",
                      color === "violet" && "bg-violet-500",
                      color === "purple" && "bg-purple-500",
                      color === "fuchsia" && "bg-fuchsia-500",
                      color === "pink" && "bg-pink-500",
                      color === "rose" && "bg-rose-500",
                    )}
                  />

                  <div
                    className={twMerge(
                      "absolute top-1.5 right-1.5 -z-10 size-16 rounded-xl transition duration-300",
                      color === "slate" &&
                        "bg-slate-500 group-hover:bg-slate-400",
                      color === "gray" && "bg-gray-500 group-hover:bg-gray-400",
                      color === "zinc" && "bg-zinc-500 group-hover:bg-zinc-400",
                      color === "neutral" &&
                        "bg-neutral-500 group-hover:bg-neutral-400",
                      color === "stone" &&
                        "bg-stone-500 group-hover:bg-stone-400",
                      color === "red" && "bg-red-500 group-hover:bg-red-400",
                      color === "orange" &&
                        "bg-orange-500 group-hover:bg-orange-400",
                      color === "amber" &&
                        "bg-amber-500 group-hover:bg-amber-400",
                      color === "yellow" &&
                        "bg-yellow-500 group-hover:bg-yellow-400",
                      color === "lime" && "bg-lime-500 group-hover:bg-lime-400",
                      color === "green" &&
                        "bg-green-500 group-hover:bg-green-400",
                      color === "emerald" &&
                        "bg-emerald-500 group-hover:bg-emerald-400",
                      color === "teal" && "bg-teal-500 group-hover:bg-teal-400",
                      color === "cyan" && "bg-cyan-500 group-hover:bg-cyan-400",
                      color === "sky" && "bg-sky-500 group-hover:bg-sky-400",
                      color === "blue" && "bg-blue-500 group-hover:bg-blue-400",
                      color === "indigo" &&
                        "bg-indigo-500 group-hover:bg-indigo-400",
                      color === "violet" &&
                        "bg-violet-500 group-hover:bg-violet-400",
                      color === "purple" &&
                        "bg-purple-500 group-hover:bg-purple-400",
                      color === "fuchsia" &&
                        "bg-fuchsia-500 group-hover:bg-fuchsia-400",
                      color === "pink" && "bg-pink-500 group-hover:bg-pink-400",
                      color === "rose" && "bg-rose-500 group-hover:bg-rose-400",
                    )}
                  />

                  <div className="absolute inset-0 -z-10 rounded-2xl bg-green-300 [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]" />

                  <div className="-mt-28 flex justify-center">
                    <div className="relative inline-flex">
                      <div className="absolute top-[calc(100%+16px)] h-4 w-full rounded-[100%] bg-green-500/70 transition duration-300 [mask-image:radial-gradient(closest-side,black,transparent)] group-hover:bg-green-500/30" />
                      <img
                        src={image.src}
                        alt={title}
                        className="size-50 transition duration-300 group-hover:-translate-y-6"
                      />
                    </div>
                  </div>

                  <h3 className="mt-12 font-sans text-3xl font-bold tracking-wide text-slate-800 uppercase">
                    {title}
                  </h3>

                  <p className="mt-4 font-serif text-2xl text-slate-800">
                    {description}
                  </p>

                  <div className="mt-12 flex justify-between">
                    <button
                      className={twMerge(
                        "group relative flex h-[38px] cursor-pointer items-center font-sans font-bold tracking-wide uppercase transition-all duration-300",
                        color === "slate" &&
                          "text-slate-500 hover:text-slate-400",
                        color === "gray" && "text-gray-500 hover:text-gray-400",
                        color === "zinc" && "text-zinc-500 hover:text-zinc-400",
                        color === "neutral" &&
                          "text-neutral-500 hover:text-neutral-400",
                        color === "stone" &&
                          "text-stone-500 hover:text-stone-400",
                        color === "red" && "text-red-500 hover:text-red-400",
                        color === "orange" &&
                          "text-orange-500 hover:text-orange-400",
                        color === "amber" &&
                          "text-amber-500 hover:text-amber-400",
                        color === "yellow" &&
                          "text-yellow-500 hover:text-yellow-400",
                        color === "lime" && "text-lime-500 hover:text-lime-400",
                        color === "green" &&
                          "text-green-500 hover:text-green-400",
                        color === "emerald" &&
                          "text-emerald-500 hover:text-emerald-400",
                        color === "teal" && "text-teal-500 hover:text-teal-400",
                        color === "cyan" && "text-cyan-500 hover:text-cyan-400",
                        color === "sky" && "text-sky-500 hover:text-sky-400",
                        color === "blue" && "text-blue-500 hover:text-blue-400",
                        color === "indigo" &&
                          "text-indigo-500 hover:text-indigo-400",
                        color === "violet" &&
                          "text-violet-500 hover:text-violet-400",
                        color === "purple" &&
                          "text-purple-500 hover:text-purple-400",
                        color === "fuchsia" &&
                          "text-fuchsia-500 hover:text-fuchsia-400",
                        color === "pink" && "text-pink-500 hover:text-pink-400",
                        color === "rose" && "text-rose-500 hover:text-rose-400",
                      )}
                    >
                      Learn More
                      <span
                        className={twMerge(
                          "absolute -bottom-0 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full",
                          color === "slate" && "bg-slate-500",
                          color === "gray" && "bg-gray-500",
                          color === "zinc" && "bg-zinc-500",
                          color === "neutral" && "bg-neutral-500",
                          color === "stone" && "bg-stone-500",
                          color === "red" && "bg-red-500",
                          color === "orange" && "bg-orange-500",
                          color === "amber" && "bg-amber-500",
                          color === "yellow" && "bg-yellow-500",
                          color === "lime" && "bg-lime-500",
                          color === "green" && "bg-green-500",
                          color === "emerald" && "bg-emerald-500",
                          color === "teal" && "bg-teal-500",
                          color === "cyan" && "bg-cyan-500",
                          color === "sky" && "bg-sky-500",
                          color === "blue" && "bg-blue-500",
                          color === "indigo" && "bg-indigo-500",
                          color === "violet" && "bg-violet-500",
                          color === "purple" && "bg-purple-500",
                          color === "fuchsia" && "bg-fuchsia-500",
                          color === "pink" && "bg-pink-500",
                          color === "rose" && "bg-rose-500",
                        )}
                      ></span>
                    </button>

                    <HiOutlineArrowNarrowRight className="size-8 -translate-x-2 text-slate-800 transition duration-300 group-hover:translate-x-0 group-hover:text-slate-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 hidden justify-center sm:flex">
          <div className="inline-flex gap-4">
            {cardData.map(({ title }, index) => (
              <div
                key={title}
                className={twMerge(
                  "size-2.5 cursor-pointer rounded-full bg-green-400 transition-all duration-300 hover:scale-125 hover:opacity-80",
                  index === selectedCardIndex && "scale-125 opacity-100",
                )}
                onClick={() => setSelectedCardIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
