import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import React from 'react';
import gsap from 'gsap';
import ManualInput from "./ManualInput";
import DataChart from "./DataChart";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    name: 'Förstå era kunder',
    description: ' Identifiera beteenden, behov och trender för att optimera kundupplevelsen.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Effektivisera processer',
    description: ' Upptäck flaskhalsar och förbättra arbetsflöden för högre produktivitet.',
    icon: LockClosedIcon,
  },
  {
    name: 'Minska kostnader',
    description: ' Hitta dolda utgifter och fatta smartare beslut för bättre lönsamhet.',
    icon: ServerIcon,
  },
];

export default function Demo() {
  const [data, setData] = useState([]);



  return (
    <div className="overflow-hidden bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          
          <div className="lg:pt-4 lg:pr-8">
            <div id="hero-flow" className="lg:max-w-lg">
              <h2 className="text-base font-semibold text-gray-600"></h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-400 sm:text-5xl">
              Testa själv – skapa en egen visualisering
              </p>
              <p className="mt-6 text-lg text-gray-300">
              Linjediagram är perfekt för att visa förändringar över tid eller jämföra data från olika källor.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base text-gray-400 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-purple-400">
                      {React.createElement(feature.icon, { className: "absolute top-1 left-1 size-5 text-indigo-600" })}
                      {feature.name}
                    </dt>
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="relative">
            <ManualInput onDataUpdate={setData} />
            {data.length > 0 && <DataChart data={data} />}
            
          </div>

        </div>
      </div>
    </div>
  );
}
