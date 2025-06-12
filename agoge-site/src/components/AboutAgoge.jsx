"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function AboutAgoge() {
  const corePrinciples = [
    {
      title: "Break Free",
      description: "From stagnation to continuous growth",
      emoji: "🦅"
    },
    {
      title: "Rediscover Curiosity",
      description: "Reignite your natural hunger for knowledge",
      emoji: "🔍"
    },
    {
      title: "Lifelong Learning",
      description: "Essential for mental health and fulfillment",
      emoji: "🌱"
    },
    {
      title: "Human Potential",
      description: "We're capable of so much more than we realize",
      emoji: "🚀"
    }
  ];

  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-6 ">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            About <span className="bg-gradient-to-r from-yellow-600 to-orange-500 bg-clip-text text-transparent">Agoge</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We're here to disrupt the stagnation
          </p>
        </motion.div>

        {/* Dual Cards */}
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
            className="relative isolate overflow-hidden rounded-2xl border border-gray-200 bg-white px-8 py-12 shadow-lg sm:px-12"
          >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.orange.200),transparent)] opacity-20" />
            <div className="absolute inset-y-0 left-0 -z-10 w-1/2 bg-gradient-to-r from-gray-50" />
            <div className="mx-auto max-w-xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Our Mission
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-700">
                To reawaken the innate human drive to learn, grow and explore. We create experiences that make learning irresistible again - breaking the trance of passive existence.
              </p>
              <div className="mt-8 flex items-center gap-x-4">
                <div className="rounded-full bg-gray-100 p-1">
                  <div className="rounded-full bg-gradient-to-r from-yellow-500 to-orange-400 p-1">
                    <div className="rounded-full bg-white p-2 text-gray-900">
                      🎯
                    </div>
                  </div>
                </div>
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">The transformation</p>
                  <p className="text-gray-600">From passive consumers to active learners</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Principles */}
        <div className="mx-auto mt-24 max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Core Principles
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              The beliefs that drive everything we do
            </p>
          </motion.div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {corePrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-2xl shadow-md">
                    {principle.emoji}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 opacity-0 transition-opacity duration-300 hover:opacity-20" />
                  </div>
                  <h3 className="text-xl font-semibold leading-7 text-gray-900">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-24 rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-12 text-center shadow-lg"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Ready to break free?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Join us in reclaiming the joy of learning and unlocking your full potential.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 ">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-md border-blue-200/40 border-2 shadow-xl shadow-blue-300/20 px-3.5 py-2.5 text-m font-semibold   focus-visible:outline-2 focus-visible:outline-offset-2 hover:text-xl duration-400"
            >
              Start your journey
            </motion.button>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}