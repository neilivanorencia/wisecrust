import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

const cardData = [
  {
    image: "/src/assets/desk-lamp.png",
    title: "Existentialism",
    description:
      "Existentialism posits that existence precedes essence, meaning individuals are born into the world without pre-defined purpose or nature.",
    color: "emerald",
  },
  {
    image: "/src/assets/whiteboard.png",
    title: "Nihilism",
    description:
      "Nihilism is a philosophical concept that fundamentally questions the existence of objective meaning, value, and truth. ",
    color: "blue",
  },
  {
    image: "/src/assets/stationery.png",
    title: "Idealism",
    description:
      "Idealism asserts that the nature of this world is fundamentally shaped by, or reducible to, mind, spirit, or consciousness.",
    color: "teal",
  },
  {
    image: "/src/assets/diploma.png",
    title: "Solipsism",
    description:
      "Solipsism is a philosophical proposition that posits the potential singularity of consciousness.",
    color: "sky",
  },
  {
    image: "/src/assets/locker.png",
    title: "Memento Mori",
    description:
      "Memento mori, Latin for 'remember you must die,' serves as a potent reminder of the finite nature of human existence.",
    color: "cyan",
  },
];

export const FeatureCards = () => {
  return (
    <section className="-mt-24 overflow-x-clip py-4 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="mx-auto max-w-4xl text-center font-sans text-4xl font-extrabold text-slate-800 md:text-5xl">
          Explore the Frontiers of Thought with Wisecrust
        </h2>

        <div className="mt-32 flex px-4 max-md:justify-center">
          <div className="flex flex-none gap-8 max-md:[&>*]:hidden max-md:[&>*:first-child]:block">
            {cardData.map(({ image, title, description, color }) => (
              <div
                key={title}
                className="group relative z-0 max-w-xs p-8 md:max-w-md md:p-10"
              >
                <div
                  className={twMerge(
                    "absolute top-1.5 right-1.5 -z-10 size-16 rounded-xl opacity-0 blur-md transition duration-300 group-hover:opacity-100",
                    color === "emerald" && "bg-emerald-500",
                    color === "blue" && "bg-blue-500",
                    color === "teal" && "bg-teal-500",
                    color === "sky" && "bg-sky-500",
                    color === "cyan" && "bg-cyan-500",
                  )}
                />

                <div
                  className={twMerge(
                    "absolute top-1.5 right-1.5 -z-10 size-16 rounded-xl transition duration-300",
                    color === "emerald" &&
                      "bg-emerald-500 group-hover:bg-emerald-400",
                    color === "blue" && "bg-blue-500 group-hover:bg-blue-400",
                    color === "teal" && "bg-teal-500 group-hover:bg-teal-400",
                    color === "sky" && "bg-sky-500 group-hover:bg-sky-400",
                    color === "cyan" && "bg-cyan-500 group-hover:bg-cyan-400",
                  )}
                />

                <div className="absolute inset-0 -z-10 rounded-2xl bg-green-300 [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]" />

                <div className="-mt-28 flex justify-center">
                  <div className="relative inline-flex">
                    <div className="absolute top-[calc(100%+16px)] h-4 w-full rounded-[100%] bg-green-500/70 transition duration-300 [mask-image:radial-gradient(closest-side,black,transparent)] group-hover:bg-green-500/30" />
                    <img
                      src={image}
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
                      "cursor-pointer font-sans text-sm font-bold tracking-wide uppercase",
                      color === "emerald" && "text-emerald-500",
                      color === "blue" && "text-blue-500",
                      color === "teal" && "text-teal-500",
                      color === "sky" && "text-sky-500",
                      color === "cyan" && "text-cyan-500",
                    )}
                  >
                    Learn More
                  </button>

                  <HiOutlineArrowNarrowRight className="size-8 -translate-x-2 text-slate-800 transition duration-300 group-hover:translate-x-0 group-hover:text-slate-600" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex gap-4">
            {cardData.map(({ title }, index) => (
              <div
                key={title}
                className={twMerge(
                  "size-2.5 cursor-pointer rounded-full bg-green-400 transition-all duration-300 hover:scale-125 hover:opacity-80",
                  index === 0 && "scale-125 opacity-100",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
