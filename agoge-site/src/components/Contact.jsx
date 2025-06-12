'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Field, Label, Switch } from '@headlessui/react'


const people = [
    {
      name: "Philip Samaras",
      role: "Co-Founder / CEO",
      Phone: "070-123 45 67",
      Email: "Philip.samaras@agoge.se",
      imageUrl:
        "https://media.licdn.com/dms/image/v2/D4D03AQHol1KFdfzZQw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722599513771?e=2147483647&v=beta&t=-DIw3gXI0tjWGc0sCo-_Lyjrv1J7a2DAcbtpEHkyeCE",
    },
  ];

export default function Contact() {
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="isolate px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#f3a701] to-[#ffae00] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-blue-800 sm:text-5xl">Contact Us </h2>
        <p className="mt-2 text-lg/8 text-black">Nedan hittar ni alla uppgifter för att komma i kontakt med oss.</p>
        <div className='mt-8 bg-slate-500/20 p-6 rounded-lg'>
        
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img alt="" src={person.imageUrl} className="size-30 rounded-full" />
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-blue-800">{person.name}</h3>
                    <p className="text-sm/6 font-semibold text-blue-800">{person.role}</p>
                    <p className="text-sm/6 font-semibold text-black">{person.Phone}</p>
                    <p className="text-sm/6 font-semibold text-black">{person.Email}</p>
                  </div>
                  
                </div>
              </li>
            ))}
            <div className="relative isolate px-6 pt-14 lg:px-8">
        
      </div>
          </ul>

        </div>
      </div>
    </div>
  )
}