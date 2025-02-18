export const HeaderSection = () => {
  return (
    <header>
      <div className="container mx-auto px-4">
        <div className="flex h-24 items-center justify-between md:h-28">
          <div className="flex items-center gap-4">
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
