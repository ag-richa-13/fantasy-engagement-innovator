
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container-custom mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold text-gradient mb-2">
              KK<span className="text-pm-light">.</span>
            </div>
            <p className="text-pm-light/70 text-sm">
              Product Manager specializing in fantasy sports
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-pm-light/70 text-sm">
              &copy; {currentYear} Kartik Khandelwal. All rights reserved.
            </p>
            <p className="text-pm-light/50 text-xs mt-1">
              Made with passion and expertise
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
