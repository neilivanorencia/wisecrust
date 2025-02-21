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
                    "absolute top-1.5 right-1.5 -z-10 size-16 rounded-xl",
                    color === "emerald" && "bg-emerald-500",
                    color === "blue" && "bg-blue-500",
                    color === "teal" && "bg-teal-500",
                    color === "sky" && "bg-sky-500",
                    color === "cyan" && "bg-cyan-500",
                  )}
                />

                <div className="absolute inset-0 -z-10 rounded-2xl bg-green-300 [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]" />

                <div className="-mt-28 flex justify-center">
                  <div className="relative inline-flex">
                    <img src={image} alt={title} className="size-50" />
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
                  <HiOutlineArrowNarrowRight className="size-8 text-slate-800" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
