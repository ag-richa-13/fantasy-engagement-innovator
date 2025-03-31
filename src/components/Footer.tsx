
import React from 'react';
import { Mail, Linkedin, MapPin, Phone, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-white/10 bg-gradient-to-b from-pm-dark to-black">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="text-2xl font-bold text-gradient mb-4">
              KK<span className="text-pm-light">.</span>
            </div>
            <p className="text-pm-light/70 mb-6">
              Product Manager specializing in fantasy sports with expertise in agile methodologies and UI/UX design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-9 h-9 rounded-full bg-pm-gray flex items-center justify-center text-pm-light hover:bg-pm-accent hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-pm-gray flex items-center justify-center text-pm-light hover:bg-pm-accent hover:text-white transition-colors">
                <Mail size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-pm-gray flex items-center justify-center text-pm-light hover:bg-pm-accent hover:text-white transition-colors">
                <Phone size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gradient">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-pm-light/70 hover:text-pm-accent flex items-center gap-1 transition-colors">
                  <span>Home</span>
                  <ArrowUpRight size={14} />
                </a>
              </li>
              <li>
                <a href="#about" className="text-pm-light/70 hover:text-pm-accent flex items-center gap-1 transition-colors">
                  <span>About</span>
                  <ArrowUpRight size={14} />
                </a>
              </li>
              <li>
                <a href="#experience" className="text-pm-light/70 hover:text-pm-accent flex items-center gap-1 transition-colors">
                  <span>Experience</span>
                  <ArrowUpRight size={14} />
                </a>
              </li>
              <li>
                <a href="#skills" className="text-pm-light/70 hover:text-pm-accent flex items-center gap-1 transition-colors">
                  <span>Skills</span>
                  <ArrowUpRight size={14} />
                </a>
              </li>
              <li>
                <a href="#contact" className="text-pm-light/70 hover:text-pm-accent flex items-center gap-1 transition-colors">
                  <span>Contact</span>
                  <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gradient">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-pm-accent mt-0.5" />
                <span className="text-pm-light/70">78-Tulsi, Shalimar, Alwar</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-pm-accent mt-0.5" />
                <span className="text-pm-light/70">Kartikkhandelwal1104@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-pm-accent mt-0.5" />
                <span className="text-pm-light/70">+91 9509264338</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gradient">Newsletter</h3>
            <p className="text-pm-light/70 mb-4">Subscribe to receive updates on product management trends and insights.</p>
            <div className="flex">
              <input type="email" placeholder="Your Email" className="bg-pm-gray border-0 rounded-l-lg px-4 py-2 text-pm-light focus:outline-none focus:ring-1 focus:ring-pm-accent" />
              <button type="button" className="bg-gradient-to-r from-pm-accent to-purple-500 text-white rounded-r-lg px-4 hover:opacity-90 transition-opacity">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-pm-light/50 text-sm">
            &copy; {currentYear} Kartik Khandelwal. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-pm-light/50 text-sm hover:text-pm-light transition-colors">Privacy Policy</a>
            <a href="#" className="text-pm-light/50 text-sm hover:text-pm-light transition-colors">Terms of Service</a>
            <a href="#" className="text-pm-light/50 text-sm hover:text-pm-light transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
