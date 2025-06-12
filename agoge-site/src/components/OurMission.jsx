import React from 'react';
import { motion } from 'framer-motion';
export const OurMission = () => {
    return (
<div className='mb-[10vh]'>
    <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative isolate overflow-hidden rounded-2xl border border-gray-200  px-8 py-12 shadow-lg sm:px-12"
          >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.500),transparent)] opacity-10" />
            <div className="absolute inset-y-0 right-0 -z-10 w-1/2 bg-gradient-to-l from-stone-950" />
            <div className="mx-auto max-w-xl">
              <h2 className="text-3xl font-bold tracking-tight text-agoge-500">
                Our Awakening
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                At Agoge, we observed humanity entering a strange stagnation - where people merely exist rather than thrive. We've become trapped in routines that suppress our natural curiosity and potential.
              </p>
              <div className="mt-8 flex items-center gap-x-4">
                <div className="rounded-full bg-gray-100 p-1">
                  <div className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 p-1">
                    <div className="rounded-full bg-white p-2 text-gray-900">
                      💡
                    </div>
                  </div>
                </div>
                <div className="text-sm leading-6">
                  <p className="font-semibold text-agoge-500">The realization</p>
                  <p className="text-gray-300">Learning shouldn't stop after formal education</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative isolate overflow-hidden rounded-2xl border border-gray-200 px-8 py-12 shadow-lg sm:px-12"
          >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.500),transparent)] opacity-10" />
            <div className="absolute inset-y-0 left-0 -z-10 w-1/2 bg-gradient-to-r from-stone-950" />
            <div className="mx-auto max-w-xl">
              <h2 className="text-3xl font-bold tracking-tight text-agoge-500">
                Our Mission
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                To reawaken the innate human drive to learn, grow and explore. We create experiences that make learning irresistible again - breaking the trance of passive existence.
              </p>
              <div className="mt-8 flex items-center gap-x-4">
                <div className="rounded-full bg-gray-100 p-1">
                  <div className="rounded-full bg-gradient-to-r to-agoge-500 from-orange-300 p-1">
                    <div className="rounded-full bg-white p-2 text-gray-900">
                      🎯
                    </div>
                  </div>
                </div>
                <div className="text-sm leading-6">
                  <p className="font-semibold text-agoge-500">The transformation</p>
                  <p className="text-gray-300">From passive consumers to active learners</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="mt-16 text-center text-gray-700">
        <a
                href="/onboarding"
                className="rounded-md border-blue-200/40 border-2 shadow-xl shadow-primary-400/20 px-3.5 py-2.5 text-m font-semibold text-gray-100  focus-visible:outline-2 focus-visible:outline-offset-2 hover:text-xl  duration-200 "
              >
                Learn more about our mission
              </a>
        </div>
    </div>
    );
}
export default OurMission;