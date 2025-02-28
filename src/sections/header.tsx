import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const navigationLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Articles",
    href: "/articles",
  },
  {
    title: "Courses",
    href: "/courses",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const HeaderSection = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 bg-green-200 transition-shadow duration-300 ${
          scrolled 
            ? "shadow-[0_10px_15px_-3px_rgba(0,68,27,0.07),0_4px_6px_-4px_rgba(0,68,27,0.07)]" 
            : ""
    }`}
      >
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
              <a
                href="/courses"
                className="group relative hidden cursor-pointer overflow-hidden px-4 py-2 font-semibold tracking-wide text-orange-400 uppercase transition-all duration-300 md:inline-flex"
              >
                <div className="absolute inset-0 outline-2 -outline-offset-2 outline-orange-400 transition-all duration-300 group-hover:bg-orange-400/10"></div>
                <div className="absolute inset-0 -z-10 origin-left scale-x-0 transform bg-orange-400 transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
                <span className="relative z-10 leading-6 transition-colors duration-300 group-hover:text-white">
                  Explore Now
                </span>
              </a>

              <div
                className="relative size-10 cursor-pointer"
                onClick={() => setIsOpen((current) => !current)}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={twMerge(
                      "h-0.5 w-5 -translate-y-1 bg-gray-700 transition-all duration-500",
                      isOpen && "translate-y-0 rotate-45",
                    )}
                  ></div>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={twMerge(
                      "h-0.5 w-5 translate-y-1 bg-gray-700 transition-all duration-500",
                      isOpen && "translate-y-0 -rotate-45",
                    )}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 z-30 size-full bg-green-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
            }}
          >
            <div className="absolute inset-2 mt-24 md:mt-28">
              <div className="flex h-full items-center justify-center">
                <nav className="flex flex-col items-center gap-12 md:gap-16">
                  {navigationLinks.map(({ title, href }, index) => (
                    <motion.a
                      href={href}
                      key={title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        ease: "linear",
                        delay: 0.25 * index,
                      }}
                    >
                      <span className="font-sans text-4xl font-bold text-slate-800 transition duration-300 ease-in-out hover:text-slate-600 md:text-5xl">
                        {title}
                      </span>
                    </motion.a>
                  ))}
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
