import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className=" border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-agoge-400 mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/" 
                  className="text-gray-400 hover:text-indigo-600 transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="/analys" 
                  className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                >
                  Analysis
                </a>
              </li>
              <li>
                <a 
                  href="/onboarding" 
                  className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                >
                  Onboarding
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  className=" hover:text-agoge-600 transition-colors duration-200"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-agoge-400 mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/blog" 
                  className="text-gray-300 hover:text-indigo-600 transition-colors duration-200"
                >
                  Blog
                </a>
              </li>
              <li>
                <a 
                  href="/guides" 
                  className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                >
                  Guides
                </a>
              </li>
              <li>
                <a 
                  href="/faq" 
                  className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-agoge-500 mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FontAwesomeIcon 
                  icon={faEnvelope} 
                  className="h-4 w-4 text-primary mt-1 mr-3" 
                />
                <a 
                  href="mailto:philip.samaras@agoge.se" 
                  className="text-gray-600 hover:text-primary transition-colors duration-200"
                >
                  philip.samaras@agoge.se
                </a>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon 
                  icon={faPhone} 
                  className="h-4 w-4 text-indigo-600 mt-1 mr-3" 
                />
                <a 
                  href="tel:+4670-9713750" 
                  className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                >
                  +46 70-971 37 50
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://www.linkedin.com" 
                className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-indigo-600 hover:text-white transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a 
                href="https://twitter.com" 
                className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-indigo-600 hover:text-white transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a 
                href="https://instagram.com" 
                className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-indigo-600 hover:text-white transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-full"
                />
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700 transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Bottom Row */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Agoge. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="/privacy" className="text-sm text-gray-500 hover:text-indigo-600">Privacy Policy</a>
            <a href="/terms" className="text-sm text-gray-500 hover:text-indigo-600">Terms of Service</a>
            <a href="/cookies" className="text-sm text-gray-500 hover:text-indigo-600">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;