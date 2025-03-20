import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import {gsap} from 'gsap'
import { useEffect } from 'react'

export default function Onboardingcta() {
  useEffect(() => {
    // Hero-text animation (kommer bara köras en gång när komponenten renderas)
    gsap.fromTo(
    '.ctabild',
    {
      opacity: 0,
      x: 300,
      willChange: 'transform, opacity' // Förbättrar prestanda genom att låta webbläsaren förbereda sig
    },
    {
      duration: 3,
      opacity: 1,
      x: 0,
      ease: 'power2.out',
      force3D: true, // Förbättrar GPU-prestanda
    }
  );
    },[]); // Tom array gör att det körs endast en gång vid första render


  return (
    <div className=" relative isolate overflow-hidden overflow-x-hidden bg-black px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-yellow-700 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-yellow-400/30">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-yellow-700">Onboarda snabbare och smartare
              </p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-300 sm:text-5xl">
              En bättre start för dina nya medarbetare
              </h1>
              <p className="mt-6 text-xl/8 text-gray-300">
              Att introducera nya medarbetare effektivt är avgörande för att de snabbt ska bli produktiva och känna sig välkomna.
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
  <img
    alt="Bildbeskrivning"
    src="/testbild.png"
    className=" ctabild w-[30rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[40rem] lg:w-[45rem] mx-auto"
  />
</div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-300 lg:max-w-lg">
              <p>
              Med vår digitala onboardingplattform får ni ett strömlinjeformat flöde som säkerställer att varje nyanställd får rätt information, i rätt tid – helt automatiserat.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-300">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-yellow-700">Automatiska onboarding-flöden</strong> Skapa personliga onboarding-resor som anpassas efter roll, team och avdelning.
                     Inga fler manuella utskick – allt sker digitalt.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-yellow-700">Digitalt dokumentarkiv</strong> Alla viktiga policys, checklistor och introduktionsdokument samlade på ett ställe – enkelt att hitta, enkelt att använda.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon aria-hidden="true" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-yellow-700">Analys och uppföljning</strong> Följ varje medarbetares framsteg i realtid och identifiera flaskhalsar i onboardingprocessen för kontinuerlig förbättring.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
  Skapa en smidig och engagerande onboardingupplevelse utan onödigt manuellt arbete. Med vår digitala plattform får varje nyanställd rätt information vid rätt tidpunkt – helt automatiserat.  
  Vi hjälper er att bygga en skräddarsydd onboardingprocess som speglar era värderingar och behov.  
</p>

<h2 className="mt-16 text-2xl font-bold tracking-tight text-yellow-700">
  Saknar ni onboardingmaterial? <span className="text-yellow-500">Inga problem!</span>
</h2>

<p className="mt-6">
  Vi tar fram materialet tillsammans med er. Oavsett om det handlar om företagskultur, säkerhetsföreskrifter eller interna processer, skapar vi ett innehåll som känns relevant och engagerande.  
  Genom en kombination av vår expertis och era specifika behov bygger vi en onboardingupplevelse som gör skillnad – för både medarbetare och verksamhet.
</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
