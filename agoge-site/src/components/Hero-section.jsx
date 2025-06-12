import { useState, useEffect, useRef } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


const navigation = [
, // Din nya sida
{ name: 'Home', href: '/' },{ name: 'Agoge Hub', href: '/onboarding' }, { name: 'Company', href: '/company' }, { name: 'Private', href: '/private' }, { name: 'About Us', href: '/omoss' },
 { name: 'Contact', href: '/contact' },



]

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);

  
  // Skapa en ref till texten vi vill animera
  const heroTextRef = useRef(null);
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Hero-text animation (kommer bara köras en gång när komponenten renderas)
    gsap.fromTo(
    '#hero-text',
    {
      opacity: 0,
      y: -10,
      willChange: 'transform, opacity' // Förbättrar prestanda genom att låta webbläsaren förbereda sig
    },
    {
      duration: 2,
      opacity: 1,
      y: 0,
      ease: 'power2.out',
      force3D: true, // Förbättrar GPU-prestanda
    }
  );
  
     
      // Bara kör denna animation på desktop
      gsap.to('.movingShape', {
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'power2.out',
        force3D: true,
        clipPath: 'polygon(10% 50%, 90% 60%, 80% 70%, 40% 80%, 10% 50%)',
      });
    },[]); // Tom array gör att det körs endast en gång vid första render
  

  return (
    <div className="pb-[35vh]">
      <header className="fixed inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Agoge</span>
                    <img
                      alt=""
                      src="Logotyp-Agoge.png"
                      className="h-20 w-auto"
                    />
                  </a>
                </div>
                
                <div className="flex lg:hidden">
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(true)}
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon aria-hidden="true" className="size-6" />
                  </button>
                </div>
        
                {/* Navigation links with scroll effect */}
                <div className={`hidden lg:flex lg:gap-x-12 ${scrolled ? 'bg-gradient-to-t from-zinc-900/90 to-zinc-600/70 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm' : ''}`}>
                  {navigation.map((item) => (
                    <a 
                      key={item.name} 
                      href={item.href} 
                      className="text-sm/6 font-semibold text-yellow-700 hover:text-yellow-800"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
        
                <div className="hidden lg:flex lg:flex-1 lg:justify-end relative">
          <div className="relative">
            <button 
              onClick={() => setLoginDropdownOpen(!loginDropdownOpen)}
              className="flex items-center gap-x-1 text-sm/6 font-semibold text-white"
            >
              Log in
              <ChevronDownIcon className={`h-4 w-4 transition-transform ${loginDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {loginDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-zinc-800 shadow-lg shadow-blue-200/20 ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <a
                    href="https://agoge-lms.se/login-privat"
                    className="block px-4 py-2 text-sm text-gray-900 "
                  >
                    Log in as Private
                  </a>
                  <a
                    href="https://agoge-lms.se/login-company"
                    className="block px-4 py-2 text-sm text-gray-700 "
                  >
                    Log in as Company
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
              </nav>
        
              {/* Mobile menu (unchanged) */}
              <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                  <div className="flex items-center justify-between">
                    <a href="#" className="-m-1.5 p-1.5">
                      <span className="sr-only">Agoge</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setMobileMenuOpen(false)}
                      className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon aria-hidden="true" className="size-6" />
                    </button>
                  </div>
                  <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                      <div className="space-y-2 py-6">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                      <div className="py-6">
                <div className="space-y-2">
                  <a
                    href="https://agoge-lms.se/login-privat"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in as Private
                  </a>
                  <a
                    href="https://agoge-lms.se/login-company"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in as Company
                  </a>
                </div>
              </div>
                    </div>
                  </div>
                </DialogPanel>
              </Dialog>
            </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1 %)',
            }}
            className="movingShape relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#264296] to-[#264296] md:opacity-30 sm:opacity-60 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-agoge-500 ring-1 ring-gray-800 hover:ring-gray-900/20">
              What would our Agoge Hub cost you? {' '}
              <a href="/analys" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Press here! <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div  className="text-center">
            <h1 id="hero-text"className="text-4xl font-semibold text-balance text-agoge-400 sm:text-7xl opacity-0">
            Stay curious, become more

            </h1>
            <p id="#"className="mt-8 text-lg font-medium text-pretty sm:text-xl/8 text-gray-400">
              Agoge is not a software, it is a mindset. We are just here to help
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/onboarding"
                className="rounded-md border-blue-200/40 border-2 shadow-xl shadow-primary-400/20 px-3.5 py-2.5 text-sm font-semibold text-gray-300  focus-visible:outline-2 focus-visible:outline-offset-2 hover:text-xl  duration-200 "
              >
                Learning Hub
              </a>
              <a href="/contact" className="text-sm/6 font-semibold text-gray-100 hover:text-xl duration-200">
                Contact us <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className=" movingShape relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#264296] to-[#264296] md:opacity-50 sm:opacity-60 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  )
}