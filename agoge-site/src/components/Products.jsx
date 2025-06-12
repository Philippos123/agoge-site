import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconDeviceLaptop,
  IconAi,
  IconCode,
} from "@tabler/icons-react";
import { Button } from "@material-tailwind/react"; // Changed import to Button

export function BentoGridDemo() {
  return (
    <div>
    <h2 className="text-center pt-50 pb-15 text-4xl text-primary-custom">Our Products</h2>
    <BentoGrid className="max-w-7xl mx-auto md:grid-cols-2">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          src={item.src}
          href={item.href} // Add the href prop here
          className={
            i === 0
              ? "md:col-span-2 md:row-span-2"
              : i === 1
              ? "md:col-span-1 md:row-span-2"
              : i === 2
              ? "md:col-span-3 md:row-span-1"
              : ""
          }
        />
      ))}
    </BentoGrid>
    </div>
  );
}
const Skeleton = () => (
  <div
    className="flex flex-1 max-w-7xl min-h-[1rem] rounded-xl"></div>
);
const items = [
  {
    title: "Agoge Learning Hub",
    description: "Tar upp ca 60% av bredden och dubbel höjd.",
    header: <Skeleton />,
    icon: <IconDeviceLaptop className="h-6 w-6 text-primary-custom" />,
    src: "/learning.jpg",
  },
  {
    title: "AI and Automation",
    description: "Tar upp ca 40% av bredden.",
    header: <Skeleton />,
    icon: <IconAi className="h-6 w-6 text-primary-custom" />,
    src: "/ai.jpg",
    // No href here, so no button will be shown for this item
  },
  {
    title: "Software Development",
    description: "Sträcker sig under båda de övre rutorna.",
    header: <Skeleton />,
    icon: <IconCode className="h-6 w-6 text-primary-custom" />,
    href: "/software-development", // Add the link URL
    src: "/software.jpg",
  },
  // Lägg till fler items om du vill fylla ut gridden
];
