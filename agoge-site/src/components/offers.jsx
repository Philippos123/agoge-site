import { useState, useEffect, useRef } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'



export default function Offer() {

    useGSAP(()=> {
      if (window.innerWidth > 768) { // Bara på desktop
        gsap.from('#mobil', {
            x: '-100vw',
            rotation: 360, // Kommer in uppifrån
            opacity: 1,
            duration: 10,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '#powerful-apis',
              start: 'top bottom', // När toppen av elementet är i botten av skärmen
              end: 'center center', // När mitten av elementet är i mitten av skärmen
              scrub: true,
              
            },
          });
          gsap.from('#performance', {
            y: '50vh',
            rotation: 360, // Kommer in uppifrån
            opacity: 1,
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '#mobil',
              start: 'top bottom', // När toppen av elementet är i botten av skärmen
              end: 'center center', // När mitten av elementet är i mitten av skärmen
              scrub: true,
            },
          });
          
          gsap.from('#security', {
            x: '100vh',
            rotation: 360, // Kommer in uppifrån
            opacity: 1,
            duration: 7.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '#mobil',
              start: 'top bottom', // När toppen av elementet är i botten av skärmen
              end: 'center center', // När mitten av elementet är i mitten av skärmen
              scrub: true,
            },
          });
          
          gsap.from('#powerful-apis', {
            x: '100vw',
            rotation: 360, // Kommer in uppifrån
            opacity: 1,
            duration: 7.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '#powerful-apis',
              start: 'top bottom', // När toppen av elementet är i botten av skärmen
              end: 'center center', // När mitten av elementet är i mitten av skärmen
              scrub: true,
            },
          });
          gsap.to('#deploy-header', {
            opacity: 1,
            duration: 3.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '#deploy-header',
              start: 'top bottom', // När toppen av elementet är i botten av skärmen
              end: 'center center', // När mitten av elementet är i mitten av skärmen
              scrub: true,
            },
          });
      }
        }, []);
      

    return (
      <div className="bg-black py-24 sm:py-32">
        <div  className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-base/7 font-semibold text-indigo-600">Deploy faster</h2>
          <p id="deploy-header"className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-200 sm:text-5xl">
            Everything you need to deploy your app
          </p>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div id="mobil" className="relative lg:row-span-2 ">
              <div className="absolute inset-px rounded-lg bg-gray-200 lg:rounded-l-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Mobile friendly
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                  </p>
                </div>
                <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-black shadow-2xl">
                    <img
                      className="size-full object-cover object-top"
                      src="https://tailwindui.com/plus/img/component-images/bento-03-mobile-friendly.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
            </div>
            <div id="performance" className="relative max-lg:row-start-1">
              <div   className="absolute inset-px rounded-lg bg-black border max-lg:rounded-t-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-200 max-lg:text-center">Performance</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                  <img
                    className="w-full max-lg:max-w-xs"
                    src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
            </div>
            <div id="security" className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div  className="absolute inset-px rounded-lg bg-black border"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-200 max-lg:text-center">Security</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.
                  </p>
                </div>
                <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                  <img
                    className="h-[min(152px,40cqw)] object-cover"
                    src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
            </div>
            <div id="powerful-apis" className="relative lg:row-span-2">
              <div  className="absolute inset-px rounded-lg bg-gray-200 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Powerful APIs
                  </p>
                  
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow">
                  <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                      <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                        <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                          NotificationSetting.jsx
                        </div>
                        <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                      </div>
                    </div>
                    <div className="px-6 pt-6 pb-14">{"<h1>"}</div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }