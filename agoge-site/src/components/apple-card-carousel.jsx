"use client";

import React from "react";
import { Carousel, Card } from "./ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2
        className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-gray-300 dark:text-neutral-200 font-sans">
        A system for curiosity
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const CategoryContent = ({ title, description }) => {
  return (
    <>
      {[...Array(1)].map((_, index) => (
        <div
          key={`${title}-content-${index}`}
          className="bg-stone-800 dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
          <p className="text-neutral-300 dark:text-gray-300 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-agoge-500 dark:text-agoge-500">
              {title}
            </span>{" "}
            {description}
          </p>
          <img
            src="https://assets.aceternity.com/macbook.png"
            alt="Agoge demo"
            height="500"
            width="500"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
          />
        </div>
      ))}
    </>
  );
};


const data = [
  {
    category: "Learning Platform",
    title: "One platform. All your training needs.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80",
    content: (
      <CategoryContent
        title="The core of your learning experience"
        description="Agoge Hub allows you to deliver and manage company-wide learning through SCORM courses and flexible onboarding – all in one place."
      />
    ),
  },
  {
    category: "Productivity",
    title: "Learning that fits modern work",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80",
    content: (
      <CategoryContent
        title="Short, focused and mobile-friendly"
        description="Our microlearning format increases course completion and retention. Employees can complete courses in just 5–10 minutes – anytime, anywhere."
      />
    ),
  },
  {
    category: "Customization",
    title: "Branded learning for your company",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80",
    content: (
      <CategoryContent
        title="Make it yours"
        description="With custom subdomains and white-label support, Agoge feels like your own platform – complete with your logo, colors and identity."
      />
    ),
  },
  {
    category: "Insights & Progress",
    title: "Track progress and engagement",
    src: "https://images.unsplash.com/photo-1581092918305-99cfe34a67c5?q=80",
    content: (
      <CategoryContent
        title="Real-time insights"
        description="See which courses are completed, who’s falling behind, and how your teams are performing – all from a visual admin dashboard."
      />
    ),
  },
  {
    category: "Ready-made content",
    title: "150+ courses for teams & individuals",
    src: "https://images.unsplash.com/photo-1581093588401-9c8b7203b018?q=80",
    content: (
      <CategoryContent
        title="Learning content included"
        description="Explore a wide range of ready-made courses in areas like leadership, mental well-being, productivity and communication – all available instantly."
      />
    ),
  },
];