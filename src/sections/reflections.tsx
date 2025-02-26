import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const reflections = [
  {
    text: "Life is a series of collisions with future; it is not the sum of what we've been, but what we yearn to be.",
    name: "José Ortega y Gasset",
    title: "Spanish philosopher",
    avatar: "src/assets/people/jose-ortega-y-gasset.png",
  },
  {
    text: "Everything in nature is lyrical in its own ideal essence, tragic in its own fate, and comic in its own existence.",
    name: "George Santayana",
    title: "Spanish-American philosopher",
    avatar: "/src/assets/people/george-santayama.png",
  },
  {
    text: "The good man is the man who, no matter how morally unworthy he has been, is moving to become better.",
    name: "John Dewey",
    title: "American psychologist",
    avatar: "src/assets/people/john-dewey.png",
  },
];

export const ReflectionsSection = () => {
  return (
    <section className="bg-green-300 py-24">
      <div className="container mx-auto px-8 md:px-4">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
          {reflections.map((reflections, reflectionsIndex) => (
            <motion.blockquote
              key={reflectionsIndex}
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: reflectionsIndex * 0.5,
                ease: "easeInOut",
                duration: 1,
              }}
              className={twMerge(
                reflectionsIndex === 2 && "md:hidden lg:block",
              )}
            >
              <p className="font-sans text-2xl font-bold text-slate-800 md:text-3xl">
                {reflections.text}
              </p>
              <cite className="mt-8 block">
                <div className="flex items-center gap-3">
                  <div>
                    <div
                      className="size-16 rounded-lg bg-green-400 bg-cover shadow-lg"
                      style={{
                        backgroundImage: `url(${reflections.avatar})`,
                      }}
                    ></div>
                  </div>
                  <div>
                    <p className="font-serif text-lg font-bold not-italic md:text-xl">
                      {reflections.name}
                    </p>
                    <p className="font-serif text-lg text-slate-800 not-italic md:text-xl">
                      {reflections.title}
                    </p>
                  </div>
                </div>
              </cite>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};
