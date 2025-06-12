"use client";
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";

export function GlowingEffectDemoSecond() {
  return (
    <div>
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2 mb-40 max-w-7xl  ">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5] "
        icon={<Box className="h-4 w-4 text-gray-300 " />}
        title="Our Mission"
        description="At Agoge, our mission is to empower individuals through personal development and education, fostering a more skilled and engaged workforce." />
      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Settings className="h-4 w-4 text-gray-300 " />}
        title="Our Goal"
        description="Our goal is to provide strong support to our newly hired team members, ensuring they feel confident and inspired in their roles with Agoge." />
      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Lock className="h-4 w-4 text-gray-300 " />}
        title="Why Agoge?"
        description="Choosing Agoge means investing in a partner that values growth, innovation, and support for your professional journey. Join us and experience the difference." />
      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<Sparkles className="h-4 w-4 text-gray-300 " />}
        title="Built by Agoge"
        description="Our solutions are crafted with care by the Agoge team, where quality, creativity, and cutting-edge technology come together." />
      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Search className="h-4 w-4 text-gray-300 " />}
        title="Coming Soon"
        description="Exciting new features are on the way! We're continuously evolving to bring you the best tools and experiences to help you succeed." />
    </ul>
    </div>
  );
}

const GridItem = ({
  area,
  icon,
  title,
  description
}) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 ">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01} />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 ">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-gray-400 md:text-2xl/[1.875rem] ">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-gray-300 md:text-base/[1.375rem]  [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
