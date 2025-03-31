
import React from 'react';
import { ChevronDown, Mail, Linkedin, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="bg-blur-circle w-[400px] h-[400px] bg-pm-accent/20 -top-20 -left-20"></div>
      <div className="bg-blur-circle w-[300px] h-[300px] bg-blue-500/20 bottom-40 right-10"></div>
      
      <div className="container-custom mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-pm-accent mb-2">PRODUCT MANAGER</p>
            <h1 className="font-bold mb-6">
              <span className="block">Kartik</span>
              <span className="text-gradient">Khandelwal</span>
            </h1>
            <p className="text-pm-light/80 text-lg mb-8 max-w-lg">
              Innovative Product Manager with expertise in the fantasy sports industry. 
              Skilled in agile methodologies, UI/UX design, and boosting user engagement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-full bg-pm-accent text-white font-medium hover:bg-pm-accent/90 transition-colors inline-flex items-center justify-center"
              >
                Contact Me
              </a>
              <a 
                href="#experience" 
                className="px-6 py-3 rounded-full border border-pm-accent/50 text-pm-light font-medium hover:border-pm-accent transition-colors inline-flex items-center justify-center"
              >
                View Experience
              </a>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="mailto:Kartikkhandelwal1104@gmail.com" 
                className="flex items-center gap-2 text-pm-light/80 hover:text-pm-accent transition-colors"
              >
                <Mail size={18} /> 
                <span className="text-sm">Kartikkhandelwal1104@gmail.com</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/pm-kartik" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-pm-light/80 hover:text-pm-accent transition-colors"
              >
                <Linkedin size={18} /> 
                <span className="text-sm">linkedin.com/in/pm-kartik</span>
              </a>
              <div className="flex items-center gap-2 text-pm-light/80">
                <MapPin size={18} /> 
                <span className="text-sm">78-Tulsi, Shalimar, Alwar</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-pm-accent/30 p-1">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-pm-accent/20 to-purple-900/20 flex items-center justify-center">
                  <div className="text-6xl font-bold text-gradient">KK</div>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full rounded-full border-t-4 border-pm-accent/50 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-pm-light/60 hover:text-pm-accent transition-colors"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ChevronDown className="animate-pulse" />
      </a>
    </section>
  );
};

export default Hero;
