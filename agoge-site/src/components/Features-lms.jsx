import React from "react";
import { cn } from "../lib/utils";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import { AnimatedHighlight } from "./ui/AnimatedHighlight"; // Importera den nya komponenten
import gsap from "gsap";


const BackgroundHighlight = ({ children, className }) => {
  return <span className={cn("px-2 py-1 rounded-md", className)}>{children}</span>;
};

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Develop your skills",
      description:
        "Agoge Hub helps you and your team to develop and to stay curious.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r Button ",
    },
    {
      title: "Go coureses for curiosity",
      description:
        "Wether it´s work related or just for curiosity, you can find courses that suits your needs.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 ",
    },
    {
      title: "Watch our AI on YouTube",
      description:
        "Whether its you or Tyler Durden, you can get to know about our product on YouTube",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r  ",
    },
    {
      title: "World wide!",
      description:
        "Agoge Hub is the place for you to become hungry, become more! We offer all our coureses in your native. We are world wide!",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];
  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        
      <motion.h4
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-gray-400  "
        >
          Agoge learning Hub - Is packed with features to help you{" "}
          <BackgroundHighlight className="bg-primary text-white  ">
            <AnimatedHighlight>stay curious.</AnimatedHighlight>
          </BackgroundHighlight>
        </motion.h4>

        <p
          className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-gray-300 text-center font-normal ">
          Spend 8-12 minutes a week to learn something new. We will help you
          stay curious and keep you on track. We are so back.
        </p>
      </div>
      <div className="relative ">
        <div
          className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md ">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({
  children
}) => {
  return (
    <p
      className="mx-auto text-left tracking-tight text-agoge-500  text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({
  children
}) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base text-left mx-auto",
        "text-gray-300 text-center font-normal ",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}>
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div
        className="w-full  p-5  mx-auto bg-black  shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
          {/* TODO */}
          <img
            src="/education.jpg"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-left-top rounded-sm" />
        </div>
      </div>
      <div
        className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-black  to-transparent w-full pointer-events-none" />
      <div
        className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-black  via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <a
      href="https://www.youtube.com/watch?v=RPa3_AD1_Vs"
      target="__blank"
      className="relative flex gap-10  h-full group/image">
      <div
        className="w-full  mx-auto bg-transparent group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  relative">
          {/* TODO */}
          <IconBrandYoutubeFilled className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto " />
          <img
            src="https://assets.aceternity.com/fireship.jpg"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200" />
        </div>
      </div>
    </a>
  );
};

export const SkeletonTwo = () => {
  const images = [
    "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };
  return (
    <div
      className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      {/* TODO */}
      <div className="flex flex-row -ml-20">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-black  border-neutral-100 shrink-0 overflow-hidden">
            <img
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0" />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-black border border-neutral-100 shrink-0 overflow-hidden">
            <img
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0" />
          </motion.div>
        ))}
      </div>
      <div
        className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-black  to-transparent  h-full pointer-events-none" />
      <div
        className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-black   to-transparent h-full pointer-events-none" />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div
      className="h-60 md:h-60  flex flex-col items-center relative bg-transparent mt-10">
      <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  );
};

export const Globe = ({ className }) => {
  const canvasRef = useRef(null);
  const globeInstance = useRef(null);
  const phiRef = useRef(0);

  useEffect(() => {
    if (!canvasRef.current) return;

    globeInstance.current = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.1, 0.2, 0.5],
      markerColor: [0.2, 0.6, 1],
      glowColor: [0.6, 0.8, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phiRef.current;
      },
    });

    // GSAP animation for smooth rotation
    gsap.to(phiRef, {
      current: "+=6.28", // One full rotation (2π radians)
      duration: 30,
      repeat: -1,
      ease: "none",
    });

    return () => {
      if (globeInstance.current) {
        globeInstance.current.destroy();
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
