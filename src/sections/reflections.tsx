import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

import joseOrtegaImage from "@/src/assets/people/jose-ortega-y-gasset.png";
import georgeSantayamaImage from "@/src/assets/people/george-santayama.png";
import johnDeweyImage from "@/src/assets/people/john-dewey.png";

const reflections = [
  {
    text: "Life is a series of collisions with future; it is not the sum of what we've been, but what we yearn to be.",
    name: "José Ortega y Gasset",
    title: "Spanish philosopher",
    avatar: joseOrtegaImage,
  },
  {
    text: "Everything in nature is lyrical in its own ideal essence, tragic in its own fate, and comic in its own existence.",
    name: "George Santayana",
    title: "Spanish-American philosopher",
    avatar: georgeSantayamaImage,
  },
  {
    text: "The good man is the man who, no matter how morally unworthy he has been, is moving to become better.",
    name: "John Dewey",
    title: "American psychologist",
    avatar: johnDeweyImage,
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
                  <div className="size-16 overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={reflections.avatar.src}
                      alt={reflections.name}
                      className="h-full w-full object-cover"
                    />
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
