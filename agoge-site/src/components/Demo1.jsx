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
    name: 'Förstå era kunder',
    description: ' Jämför kundsegment och deras beteenden över olika tidsperioder.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Effektivisera processer',
    description: ' Jämför produktivitet eller effektivitet mellan olika avdelningar eller tidsramar.',
    icon: LockClosedIcon,
  },
  {
    name: 'Minska kostnader',
    description: '  Visualisera kostnadsvariationer och hitta områden för besparingar',
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
              <h2 className="text-base font-semibold text-gray-400"></h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-400 sm:text-5xl">
              Vad gör ett stapeldiagram?
              </p>
              <p className="mt-6 text-lg text-gray-300">
              Stapeldiagram är utmärkta för att visa hur värden förändras över tid eller för att jämföra olika grupper eller kategorier. Perfekt för att analysera försäljning, produktprestanda eller andra nyckeltal.              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base text-gray-300 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-yellow-700/70">
                      {React.createElement(feature.icon, { className: "absolute top-1 left-1 size-5 text-yellow-600" })}
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
