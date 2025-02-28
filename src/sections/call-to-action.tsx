import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { Circle } from "@/src/components/circle";
import { Hexagon } from "@/src/components/hexagon";

import abcImage from "@/src/assets/illustrations/abc.png";
import bagImage from "@/src/assets/illustrations/bag.png";

export const CallToAction = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const illustrationsRotate = useTransform(scrollYProgress, [0, 1], [45, -45]);

  return (
    <section className="overflow-hidden py-60" ref={sectionRef}>
      <div className="container mx-auto px-8 md:px-4">
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hexagon size={700} />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hexagon duration={50} size={1100} reverse />
          </div>
          <div className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 sm:block">
            <Circle
              animate
              className="absolute -top-[400px] left-5 size-[200px]"
            >
              <motion.img
                src={abcImage.src}
                alt="ABC blocks illustration"
                className="size-[140px]"
                style={{
                  rotate: illustrationsRotate,
                }}
              />
            </Circle>
          </div>
          <div className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 sm:block">
            <Circle
              animate
              className="absolute -top-[70px] -left-[600px] size-[200px]"
            >
              <motion.img
                src={bagImage.src}
                alt="School bag illustration"
                className="size-[140px]"
                style={{
                  rotate: illustrationsRotate,
                }}
              />
            </Circle>
          </div>
          <h2 className="mx-auto max-w-sm text-center font-sans text-4xl font-extrabold text-slate-800 md:text-5xl">
            Deeper Perspectives Await
          </h2>
          <p className="mx-auto mt-8 max-w-sm text-center font-serif text-2xl text-slate-800 md:text-3xl">
            Deepen your understanding by delving into wide range of knowledge.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="/courses"
              className="group relative inline-flex cursor-pointer overflow-hidden px-4 py-2 font-semibold tracking-wide text-teal-500 uppercase transition-all duration-300"
            >
              <div className="absolute inset-0 outline-2 -outline-offset-2 outline-teal-500 transition-all duration-300 group-hover:bg-orange-400/10"></div>
              <div className="absolute inset-0 -z-10 origin-left scale-x-0 transform bg-teal-500 transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
              <span className="relative z-10 leading-6 transition-colors duration-300 group-hover:text-white">
                Get Started
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
