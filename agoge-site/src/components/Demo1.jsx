import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import React from 'react';
import gsap from 'gsap';
import ManualInputBar from "./ManualInput1";
import DataChartBar from "./DataChart1";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    name: 'Förstå kunden',
    description: ' Med hjälp av att analysera data kan du förstå er kund',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Effektivisera processer',
    description: ' Med data kan du effektivisera processer och hitta flaskhalsar',
    icon: LockClosedIcon,
  },
  {
    name: 'Spara pengar',
    description: '  Genom att analysera data kan du hitta onödiga kostnader',
    icon: ServerIcon,
  },
];

export default function Demo1() {
  const [data, setData] = useState([]);



  return (
    <div className="overflow-hidden bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="relative">
            <ManualInputBar onDataUpdate={setData} />
            {data.length > 0 && <DataChartBar data={data} />}
            
          </div>
          <div className="lg:pt-4 lg:pr-8">
            <div id="#" className="lg:max-w-lg">
              <h2 className="text-base font-semibold text-gray-600"></h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-600 sm:text-5xl">
                Vad gör ett Stapel diagram?
              </p>
              <p className="mt-6 text-lg text-gray-600">
                Stapel diagram är bra på att visa förändringar över tid eller jämföra data från olika källor.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      {React.createElement(feature.icon, { className: "absolute top-1 left-1 size-5 text-indigo-600" })}
                      {feature.name}
                    </dt>
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          

        </div>
      </div>
    </div>
  );
}
