export const HeaderSection = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-green-100/10 backdrop-blur-2xl">
      <div className="container mx-auto px-4">
        <div className="flex h-24 items-center justify-between md:h-28">
          <div className="flex items-center gap-2">
            <img
              src="/favicon.svg"
              alt="Wisecrust Logo"
              className="size-16 md:size-20"
            />

            <p className="font-sans text-2xl font-semibold tracking-wide text-green-600 uppercase md:text-3xl">
              Wisecrust
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative hidden cursor-pointer px-4 py-2 font-semibold tracking-wide uppercase md:inline-flex">
              <div className="absolute inset-0 outline-2 -outline-offset-2 outline-orange-400"></div>

              <span className="leading-6 text-orange-400">Explore Now</span>
            </button>

            <div className="relative size-10 cursor-pointer">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="h-0.5 w-5 -translate-y-1 bg-gray-700"></div>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="h-0.5 w-5 translate-y-1 bg-gray-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
