"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-6 w-full">
      <div className="container mx-auto px-4">
        
        {/* Quote Section */}
        <div className="text-center mb-12">
          <p className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
            {process.env.NEXT_PUBLIC_BRAND_TL}
          </p>
        </div>

        {/* Main Footer Content */}
        <div className="grid font-sans grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Left Column */}
          <div className="space-y-6">
          <h1 className="text-2xl font-serif">br.</h1>
            
            <div className="flex space-x-4 gap-2 text-xs sm:text-sm">
              <Link href={process.env.NEXT_PUBLIC_FB_URL || "#"} className="text-gray-800 font-semibold uppercase hover:text-primary-light">
                Facebook
              </Link>
              <Link href={process.env.NEXT_PUBLIC_IG_URL || "#"} className="text-gray-800 font-semibold uppercase hover:text-primary-light">
                Instagram
              </Link>
              <Link href={process.env.NEXT_PUBLIC_TWITTER_URL || "#"} className="text-gray-800 font-semibold uppercase hover:text-primary-light">
                Twitter
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-gray-900">Contact & Hours</h3>
              <p className="text-gray-600">Phone: {process.env.NEXT_PUBLIC_PHONE_CC+" "+process.env.NEXT_PUBLIC_PHONE}</p>
              <Link href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} className="text-gray-600">Email: {process.env.NEXT_PUBLIC_EMAIL}</Link>
              <div>
                <p className="text-gray-600">Opening Hours:</p>
                <p className="text-gray-600">Mon-Fri: 9:00 - 18:00</p>
                <p className="text-gray-600">Sat-Sun: Closed</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-lg text-gray-900">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-primary-light">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-primary-light">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-primary-light">
                    Grievance Redressal
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} <span className="font-semibold font-serif text-black">brown.ion</span>, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
