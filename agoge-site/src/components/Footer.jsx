import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
          {/* Område för länkar */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
            </ul>
          </div>

          {/* Område för kontakt */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul>
              <li><a href="mailto:contact@company.com" className="text-gray-400 hover:text-white">Philip.samaras@agoge.se</a></li>
              <li><a href="tel:+1234567890" className="text-gray-400 hover:text-white">+1 (234) 567-890</a></li>
            </ul>
          </div>

          {/* Område för sociala medier */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin"></i> {/* Lägg till LinkedIn-ikon */}
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i> {/* Lägg till Twitter-ikon */}
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i> {/* Lägg till Instagram-ikon */}
              </a>
            </div>
          </div>

          {/* Område för copyright */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 mt-8 sm:mt-0">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Agoge. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;