export const HeaderSection = () => {
  return (
    <header>
      <div className="container mx-auto px-4">
        <div className="flex h-24 items-center justify-between md:h-28">
          <div className="flex items-center gap-2">
            <img src="/favicon.svg" alt="Wisecrust Logo" className="size-20" />
            <p className="font-sans text-2xl font-semibold tracking-wide text-green-600 uppercase md:text-3xl">
              Wisecrust
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
