"use client";
import { useState, useEffect } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' }, 
  { name: 'Agoge Hub', href: '/onboarding' }, 
  { name: 'Private', href: '/private' }, 
  { name: 'Company', href: '/company' }, 
  { name: 'About Us', href: '/omoss' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
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

      {/* Mobile menu */}
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
  );
}