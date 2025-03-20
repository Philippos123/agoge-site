import { useState, useEffect, useRef } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import gsap from 'gsap'
import { Link } from 'react-router-dom'; // Importera Link
import { useGSAP } from '@gsap/react'

const people = [
  {
    name: "Philip Samaras",
    role: "CEO",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4D03AQHol1KFdfzZQw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722599513771?e=2147483647&v=beta&t=-DIw3gXI0tjWGc0sCo-_Lyjrv1J7a2DAcbtpEHkyeCE",
  },
  {
    name: "Maria Fischer",
    role: "Co-Founder",
    imageUrl:
      "/Maria.jpg",
  },
];

export default function About() {

    gsap.to('.movingShapea', {
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'elastic(1, 0.60)', // Elastic easing med viss fjädring
        clipPath: 'polygon(10% 60%, 90% 200%, 80% 70%, 60% 80%, 40% 90%, 200% 70%, 10% 40%, 20% 10%)',
        background: 'linear-gradient(to top right, #f3a701, #ffae00)',
      });

    return (
      <div className="bg-black py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-400 sm:text-4xl">
              Vilka är vi på Agoge?
            </h2>
            <p className="mt-6 text-lg/8 text-gray-400">
              På Agoge är vi en del av en större rörelse som vill förändra världen. Vi tror på att alla människor har en inneboende potential att förändra världen och vi vill hjälpa dig att upptäcka och utveckla den potentialen. Vi tror på att alla människor har en inneboende potential att förändra världen och vi vill hjälpa dig att upptäcka och utveckla den potentialen.
            </p>
          </div>
          
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img alt="" src={person.imageUrl} className="size-30 rounded-full" />
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-200">{person.name}</h3>
                    <p className="text-sm/6 font-semibold text-gray-400">{person.role}</p>
                  </div>
                  
                </div>
              </li>
            ))}
            <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 40.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1 %)',
            }}
            className=" .movingShapea relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#f3a701] to-[#ffae00] md:opacity-20 sm:opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
          </ul>
        </div>
      </div>
      
    )
  }