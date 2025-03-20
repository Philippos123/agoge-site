import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Description } from '@headlessui/react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { name: 'Minskad personalomsättning', value: '28', Description: 'En stark onboardingprocess kan förbättra medarbetarretentionen' },
  { name: 'Ökad anställningstid', value: '58', Description: 'Medarbetare stannar längre hos er.' },
  { name: 'Snabbare produktivitet:', value: '60', Description: 'Anställda blir snabbare produktiva' },
  { name: 'Ökat medarbetarengagemang:', value: '83', Description: 'Engagemanget hos anställda ökar' },
];

export default function OnboardingData() {
  // Skapar en referens-array för varje stats element
  const statRefs = useRef([]);

  useEffect(() => {
    statRefs.current.forEach((statRef, index) => {
      const value = stats[index].value;

      gsap.fromTo(
        statRef,
        { innerHTML: '0', opacity: 0 }, // Startvärde för räknaren och opacity
        {
          innerHTML: value, // Slutvärde för räknaren
          opacity: 1, // Slutvärde för opacity
          duration: 4, // Tid för animationen
          ease: 'power1.out',
          scrollTrigger: {
            trigger: statRef, // När elementet kommer i vyn
            start: 'top 80%', // När elementet kommer in i vyn
            end: 'top 30%',
            once: true, // Kör animationen en gång
            toggleActions: 'play none none none',
          },
          onUpdate: () => {
            // Runda och uppdatera innerHTML på varje stat utan att använda targets()
            const currentValue = Math.round(statRef.innerHTML);
            statRef.innerHTML = `${currentValue}%`; // Runda värdet och sätt procent
          },
        }
      );
    });
  }, []);

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
        
      />
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#f3a701] to-[#ffae00] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#f3a701] to-[#ffae00] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-24 ">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Varför Onboarding? </h2>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
            Onboarding är något som alla genomför första dagarna på jobbet. Det är en process som hjälper nya medarbetare att komma in i företaget och känna sig välkomna.
            Med en bra onboarding-process kan du snabbt komma igång med ditt nya jobb och känna dig trygg i din nya roll.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10 text-center">
            <h2>Effekten av onboarding</h2>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className=" font-semibold tracking-tight text-white">
                  {stat.Description}
                </dt>
                <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                <dd
                  ref={(el) => statRefs.current[index] = el}  // Referens för varje stat
                  className="text-4xl font-semibold tracking-tight text-white"
                >
                  {stat.value}
                </dd>
                
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
