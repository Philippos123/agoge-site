import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import BarChart3D from "./BarChart3D"; // Importera 3D-stapelgrafen
import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const features = [
  {
    name: 'Maskininlärning anpassad för er verksamhet',
    description:
      'Våra modeller tränas specifikt på er data för att möta just era utmaningar – oavsett om det handlar om kundbeteende, marknadsföring, riskanalys eller operativ effektivitet.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Datadriven transformation',
    description: 'Vi hjälper er att förvandla historiska mönster och realtidsdata till prediktiva modeller som Optimerar processer och resursanvändningIdentifierar nya affärsmöjligheter och risker Automatiserar beslutsfattande för ökad effektivitet',
    icon: LockClosedIcon,
  },
  
]

export default function Features() {
  

    useGSAP(()=> {
        gsap.from('#flow-img', {
            x: 200, // Startposition
            opacity: 0, // Start opacity
            duration: 1.5, // Animeringens längd
          
            scrollTrigger: {
              trigger: '#flow-img', // Triggern är #flow-img
              start: 'top bottom', // Animationen startar när toppen av elementet når botten av viewport
              end: 'center center', // Animationen slutar när mitten av elementet når mitten av viewport
              scrub: true, // Ingen synkronisering med skrollningen, animationen körs bara när den träffar start- och slutpunkten
            }
          });
          
    })
  return (
    <div className="overflow-hidden bg-black py-24 sm:py-32 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div id="flow-img"className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-purple-600">Mer insikt med Data</h2>
              <p  className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-400 sm:text-5xl">
              Från data till insikt – och konkurrensfördel
              </p>
              <p className="mt-6 text-lg/8 text-gray-300">
              Rådata i sig har inget värde – det är hur ni använder den som avgör.
              Vi tar er befintliga data och bygger avancerade maskininlärningsmodeller som ger er affärskritiska insikter, automatiserar beslutsfattande och driver lönsamhet.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-300 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-purple-400">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-400" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                  
                ))}
              </dl>
            </div>
          </div>
          <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
        </div>
        <div className='hidden sm:block'>
        <div id="chart-container" className="flex items-center justify-center w-[48rem] h-[30rem]  rounded-xl lg:block sm:hidden">
          
            <BarChart3D />
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}