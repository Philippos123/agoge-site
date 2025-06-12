"use client";


import { motion } from "motion/react";

export function HeroSectionOne() {
  return (
    <div
      className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center mt-30 mb-30 bg-gradient-to-r to-primary/10 from-agoge-400/10 rounded-2xl shadow-2xl shadow-primary/20 dark:shadow-primary/10 ">
      <div
        className="absolute inset-y-0 left-0 h-full w-px bg-agoge-500/80 dark:bg-neutral-800/80">
        <div
          className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div
        className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div
          className="absolute h-40 w-px bg-gradient-to-b from-transparent via-agoge-500 to-transparent" />
      </div>
      <div
        className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div
          className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-agoge-500 to-transparent" />
      </div>
      <div className="px-4 py-10 md:py-20">
        <h1
          className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {"Start your journey with Agoge today"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block">
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400">
          With Agoge-LMS it doesnt matter if you are a company or an individual, we have the tools to help you grow and learn.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4 ">
          <button
            className="w-60 transform rounded-lg shadow-2xl shadow-primary px-6 py-2 font-medium text-gray-300 transition-all duration-300 hover:-translate-y-0.5 hover:text-xl ">
            Company
          </button>
          <button
            className="w-60 transform rounded-lg shadow-2xl shadow-agoge-400 border border-gray-300 px-6 py-2 font-medium transition-all duration-300 hover:-translate-y-0.5 hover:text-xl ">
            Privat
          </button>
        </motion.div>
        
      </div>
    </div>
  );
}

