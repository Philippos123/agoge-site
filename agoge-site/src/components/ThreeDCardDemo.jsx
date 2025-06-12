"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

// Logotyp-URLs för varje kund
const logos = [
  "/INDUSTRY.png",
  "/Sundbyholmgästhamn.png",
  "/Elite-hotels.jpg",
];

export function ThreeDCardDemo() {
  return (
    <div className="flex space-x-6 justify-center ">
      {/* Loopar igenom loggorna och skapar ett kort för varje */}
      {logos.map((logo, index) => (
        <CardContainer key={index} className="inter-var">
          <CardBody
            className={`relative group/card  border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border
              bg-gradient-to-r 
              ${index === 0 ? "from-blue-500/30 to-sky-400/30" : ""}  // Blå till grönaktig blå
              ${index === 1 ? "from-cyan-500/30 to-indigo-500/30" : ""}  // Blå/lila till gul
              ${index === 2 ? "from-blue-500/30 to-orange-500/30" : ""}  
            `}
          >
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 "
            >
              Client {index + 1}
            </CardItem>
            <CardItem
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 "
            >
            </CardItem>

            {/* Logotyp i sitt eget kort */}
            <CardItem translateZ="50" rotateX={20} rotateZ={-10} className="w-full h-20 flex justify-center items-center mt-10">
              <img
                src={logo}
                alt={`Client Logo ${index + 1}`}
                className="h-25 object-contain hover:scale-110 transition-transform duration-300"
              />
            </CardItem>

            {/* Knappar */}
            <div className="flex justify-between items-center mt-20">
              
              
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}
