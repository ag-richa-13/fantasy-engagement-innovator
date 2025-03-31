
import React from 'react';
import { ChevronDown, Mail, Linkedin, MapPin, Phone } from 'lucide-react';

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
                className="px-6 py-3 rounded-full bg-gradient-to-r from-pm-accent to-purple-500 text-white font-medium hover:from-pm-accent/90 hover:to-purple-500/90 transition-all inline-flex items-center justify-center shadow-lg shadow-pm-accent/20"
              >
                Contact Me
              </a>
              <a 
                href="#experience" 
                className="px-6 py-3 rounded-full border border-pm-accent/50 bg-pm-gray/30 backdrop-blur-sm text-pm-light font-medium hover:border-pm-accent hover:bg-pm-gray/50 transition-all inline-flex items-center justify-center"
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
              <div className="flex items-center gap-2 text-pm-light/80">
                <Phone size={18} /> 
                <span className="text-sm">+91 9509264338</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in">
            <div className="relative w-full max-w-md">
              <div className="glass p-8 rounded-3xl bg-gradient-to-bl from-pm-accent/10 to-purple-900/10 border border-white/10">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gradient mb-3">Professional Summary</h3>
                  <p className="text-pm-light/80">
                    Over 5 years of progressive experience in product management, specialized in fantasy sports applications with a focus on enhancing user experience.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gradient mb-3">Core Strengths</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="px-3 py-2 rounded-lg bg-pm-dark/50 border border-pm-accent/20 text-sm font-medium text-pm-light/90">Agile Methodologies</div>
                    <div className="px-3 py-2 rounded-lg bg-pm-dark/50 border border-pm-accent/20 text-sm font-medium text-pm-light/90">UI/UX Design</div>
                    <div className="px-3 py-2 rounded-lg bg-pm-dark/50 border border-pm-accent/20 text-sm font-medium text-pm-light/90">Product Strategy</div>
                    <div className="px-3 py-2 rounded-lg bg-pm-dark/50 border border-pm-accent/20 text-sm font-medium text-pm-light/90">Data Analysis</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-pm-accent to-purple-500 rounded-2xl transform rotate-12 blur-xl opacity-30"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-xl opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-pm-light/60 hover:text-pm-accent transition-colors"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ChevronDown className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
