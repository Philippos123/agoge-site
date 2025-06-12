"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function DualViewTabs() {
  const [activeTab, setActiveTab] = useState('company');

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 md:py-12">
      {/* Tabs for both mobile and desktop */}
      <div className="flex justify-center mb-6 md:mb-12">
        <div className="relative bg-stone-800 p-1 rounded-full border-1 border-gray-600 shadow-sm">
          <div className="flex space-x-1">
            {['company', 'personal'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative z-10 px-3 py-2 md:px-6 md:py-2 text-xs md:text-sm font-medium rounded-full transition-colors ${
                  activeTab === tab ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {tab === 'company' ? 'For Your Company' : 'For You Personally'}
              </button>
            ))}
          </div>
          {activeTab && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 z-0 rounded-full"
              initial={false}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}
        </div>
      </div>

      {/* Content for both mobile and desktop */}
      <div className="relative h-[400px] sm:h-[450px] md:h-[500px] overflow-hidden rounded-2xl border border-gray-600 shadow-md">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex flex-col md:flex-row"
          >
            {activeTab === 'company' ? (
              <>
                {/* Company Content */}
                <div className="w-full md:w-1/2 h-1/2 md:h-full p-4 md:p-8 flex flex-col justify-center order-2 md:order-1">
                  <h3 className="text-xl md:text-2xl font-bold text-agoge-500 mb-3 md:mb-6">
                    Why Agoge for Your Company
                  </h3>
                  <ul className="space-y-2 md:space-y-4 text-sm md:text-base ">
                    <ListItem>Transform your workforce with cutting-edge training</ListItem>
                    <ListItem>Boost productivity by up to 40% with our proven methods</ListItem>
                    <ListItem>Create a culture of continuous improvement</ListItem>
                    <ListItem>Reduce turnover by fostering employee growth</ListItem>
                  </ul>
                </div>
                <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden order-1 md:order-2">
                  <img
                    src="/education.jpg" 
                    alt="Company team growth"
                    className="absolute h-full w-full object-cover"
                    style={{ maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', 
                             '@media (min-width: 768px)': { maskImage: 'linear-gradient(to left, transparent 0%, black 20%)' }}}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-stone-950/90 via-stone-500/30 to-transparent" />
                </div>
              </>
            ) : (
              <>
                {/* Personal Content */}
                <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden order-1">
                  <img
                    src="/happy-women.jpg"
                    alt="Personal development"
                    className="absolute h-full w-full object-cover"
                    style={{ maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                             '@media (min-width: 768px)': { maskImage: 'linear-gradient(to right, transparent 0%, black 20%)' }}}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-stone-950/90 via-stone-500/30 to-transparent" />
                </div>
                <div className="w-full md:w-1/2 h-1/2 md:h-full p-4 md:p-8 flex flex-col justify-center order-2">
                  <h3 className="text-xl md:text-2xl font-bold text-[#967a26] mb-3 md:mb-6">
                    How Agoge Affects You Personally
                  </h3>
                  <ul className="space-y-2 md:space-y-4 text-sm md:text-base">
                    <ListItem>Unlock your full potential with personalized coaching</ListItem>
                    <ListItem>Gain confidence in your professional abilities</ListItem>
                    <ListItem>Accelerate your career progression</ListItem>
                    <ListItem>Develop resilience and adaptability skills</ListItem>
                    <ListItem>Join a community of high-achieving professionals</ListItem>
                  </ul>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function ListItem({ children }) {
  return (
    <motion.li 
      className="flex items-start"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <span className="mr-2 md:mr-3 mt-1 flex h-2 w-2 rounded-full bg-[#0079fa]" />
      <span className="text-gray-300">{children}</span>
    </motion.li>
  );
}