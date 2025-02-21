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
            {cardData.map(({ image, title, description }) => (
              <div key={title} className="max-w-xs p-8 md:max-w-md md:p-10">
                <img src={image} alt={title} className="size-50" />
                <h3 className="mt-12 font-sans text-3xl font-bold tracking-wide text-slate-800 uppercase">
                  {title}
                </h3>
                <p className="mt-4 font-serif text-2xl text-slate-800">
                  {description}
                </p>
                <button className="mt-12 font-sans text-sm font-bold tracking-wide uppercase">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
