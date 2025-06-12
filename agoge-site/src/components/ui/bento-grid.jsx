import React from "react";
import { cn } from "../../lib/utils";

export const BentoGrid = ({
  className,
  children
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-2 md:gap-6 lg:grid-cols-3",
        className
      )}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  src,
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl ",
        className
      )}>
      {src && (
        <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-md mb-4"> {/* Added mb-4 for spacing */}
          <img
            src={src}
            alt={title || "Image"}
            className="object-cover w-full h-full" // Added object-cover for better image fitting
          />
        </div>
      )}
      {header && <div className="mb-2">{header}</div>} {/* Added mb-2 for spacing */}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div
          className="mt-2 mb-2 font-sans font-bold text-neutral-600 ">
          {title}
        </div>
        <div
          className="font-sans text-xs font-normal text-neutral-600 ">
          {description}
        </div>
      </div>
    </div>
  );
};