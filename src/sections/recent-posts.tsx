import type { CollectionEntry } from "astro:content";

import { Card } from "@/src/components/card";
import { Tag } from "@/src/components/tag";
import { getPostColorFromCategory } from "@/src/utils/post-utils";
import { twMerge } from "tailwind-merge";

export const RecentPosts = (props: {
  recentPosts: CollectionEntry<"articles">[];
}) => {
  const { recentPosts } = props;

  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="mx-auto max-w-4xl text-center font-sans text-4xl font-extrabold text-slate-800 md:text-5xl">
          Dive into Latest Philosophical Explorations
        </h2>
        <p className="mt-8 text-center font-serif text-2xl text-slate-800 md:text-3xl">
          Explore the latest discussions and interpretations of philosophical
          ideas.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-8 md:mt-28 md:grid-cols-2">
          <div className="flex flex-col gap-8">
            {recentPosts.map(
              ({ data: { title, description, category } }, postIndex) => (
                <Card
                  key={postIndex}
                  buttonText="Read More"
                  color={getPostColorFromCategory(category)}
                  className={twMerge(
                    (postIndex === 1 || postIndex === 3 || postIndex === 5) &&
                      "md:hidden",
                  )}
                >
                  <Tag color={getPostColorFromCategory(category)}>
                    {category}
                  </Tag>
                  <h3 className="mt-4 font-sans text-3xl font-extrabold text-slate-800">
                    {title}
                  </h3>
                  <p className="mt-6 font-serif text-xl text-slate-800 md:text-2xl">
                    {description}
                  </p>
                </Card>
              ),
            )}
          </div>
          <div className="mt-16 hidden flex-col gap-8 md:flex">
            {recentPosts.map(
              ({ data: { title, description, category } }, postIndex) => (
                <Card
                  key={postIndex}
                  buttonText="Read More"
                  color={getPostColorFromCategory(category)}
                  className={twMerge(
                    (postIndex === 0 || postIndex === 2 || postIndex === 4) &&
                      "md:hidden",
                  )}
                >
                  <Tag color={getPostColorFromCategory(category)}>
                    {category}
                  </Tag>
                  <h3 className="mt-4 font-sans text-3xl font-extrabold text-slate-800">
                    {title}
                  </h3>
                  <p className="mt-6 font-serif text-xl text-slate-800 md:text-2xl">
                    {description}
                  </p>
                </Card>
              ),
            )}
          </div>
        </div>

        <div className="mt-6 flex justify-center md:mt-12">
          <button className="group relative inline-flex w-full cursor-pointer justify-center overflow-hidden px-4 py-2 font-semibold tracking-wide text-indigo-500 uppercase transition-all duration-300 sm:w-auto">
            <div className="absolute inset-0 outline-2 -outline-offset-2 outline-indigo-500 transition-all duration-300 group-hover:bg-indigo-500/10"></div>
            <div className="absolute inset-0 -z-10 origin-left scale-x-0 transform bg-indigo-500 transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
            <span className="relative z-10 text-center leading-6 transition-colors duration-300 group-hover:text-white">
              Explore All Posts
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
