export const HeaderSection = () => {
  return (
    <header>
      <div className="container mx-auto px-4">
        <div className="flex h-24 items-center justify-between md:h-28">
          <div className="flex items-center gap-4">
            <button className="relative hidden cursor-pointer px-4 py-2 font-semibold tracking-wide uppercase md:inline-flex">
              <div className="absolute inset-0 outline-2 -outline-offset-2 outline-orange-400"></div>
              <span className="leading-6 text-orange-400">Explore Now</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
