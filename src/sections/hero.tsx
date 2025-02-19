import { Circle } from "@/src/components/circle";
import { Hexagon } from "@/src/components/hexagon";

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

        <div className="mt-8 flex justify-center">
          <div className="relative z-0 inline-flex h-[250px] w-full max-w-xl md:h-[500px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon className="hidden size-[1100px] md:block" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Hexagon className="hidden size-[1800px] md:block" />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute top-[-825px] left-[275px] hidden md:inline-flex">
                <img
                  src="/src/assets/abacus.png"
                  alt="Abacus"
                  className="size-[150px]"
                />
              </Circle>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute -top-[80px] -left-[605px] hidden md:inline-flex">
                <img
                  src="/src/assets/art.png"
                  alt="Art"
                  className="size-[150px]"
                />
              </Circle>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle className="absolute top-[270px] left-[190px] hidden md:inline-flex">
                <img
                  src="/src/assets/clock.png"
                  alt="Clock"
                  className="size-[150px]"
                />
              </Circle>
            </div>

            <img
              src="/src/assets/reading.png"
              alt="Book"
              className="absolute top-1/2 left-1/2 h-auto w-auto max-w-[80%] -translate-x-1/2 -translate-y-1/2 object-contain"
            />
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-center gap-4 md:mt-80">
          <div className="inline-flex h-10 w-5 justify-center rounded-full pt-2 outline-4 outline-green-500/10">
            <div className="h-3 w-1 rounded-full bg-green-400"></div>
          </div>
          <p className="font-sans font-bold tracking-wide text-green-500/50 uppercase">
            Scroll for More Information
          </p>
        </div>
      </div>
    </section>
  );
};
