export const HeroSection = () => {
  return (
    <section className="overflow-x-clip py-36 md:py-52">
      <div className="container mx-auto px-4">
        <p className="text-center text-lg font-bold tracking-wider text-slate-600 uppercase">
          Haven for Curious Minds
        </p>

        <h1 className="mx-auto mt-4 max-w-2xl text-center text-5xl font-extrabold text-slate-800 md:text-6xl">
          Lighting Lamps in the Labyrinth of Life
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-center font-serif text-2xl text-slate-700 md:text-3xl">
          Establishing insightful reflection through profound concepts
        </p>

        <div className="mt-10 flex justify-center">
          <button className="relative cursor-pointer px-4 py-2 font-semibold tracking-wide uppercase">
            <div className="absolute inset-0 outline-2 -outline-offset-2 outline-green-700"></div>
            <span className="leading-6 text-green-700">Explore Now</span>
          </button>
        </div>
      </div>
    </section>
  );
};
