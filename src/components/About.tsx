
import React from 'react';
import { BookOpen, Award, Share2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="bg-blur-circle w-[300px] h-[300px] bg-blue-500/10 bottom-20 -left-20"></div>
      
      <div className="container-custom mx-auto">
        <div className="text-center mb-16">
          <h2 className="inline-block text-gradient pb-2 mb-2">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-pm-accent to-purple-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glass bg-gradient-to-br from-pm-gray/80 to-pm-gray/40 p-8 rounded-2xl border border-white/10 shadow-xl shadow-pm-accent/5 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-medium mb-6 text-gradient">Profile Summary</h3>
            <p className="text-pm-light/80 mb-6 leading-relaxed">
              As a Product Manager with expertise in the fantasy sports industry, I leverage my skills in agile methodologies and UI/UX design to create engaging user experiences. My focus is on strategic product development driven by comprehensive data analysis.
            </p>
            <p className="text-pm-light/80 mb-6 leading-relaxed">
              I have a proven track record of enhancing user experiences and driving growth through innovative features like Safe Play Mode and Winning Conversion, which have become industry standards.
            </p>
            <p className="text-pm-light/80 leading-relaxed">
              My approach combines technical knowledge with strategic thinking, allowing me to effectively communicate with both technical teams and stakeholders to deliver products that exceed expectations.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="glass bg-gradient-to-tr from-pm-gray/80 to-pm-gray/40 p-8 rounded-2xl border border-white/10 shadow-xl shadow-pm-accent/5 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-3 mb-6">
                <BookOpen size={20} className="text-pm-accent" />
                <h3 className="text-xl font-medium text-gradient">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <h4 className="font-medium">Masters Of Commerce</h4>
                    <span className="text-pm-accent text-sm">2024 - Present</span>
                  </div>
                  <p className="text-pm-light/70 text-sm">Rajasthan University</p>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <h4 className="font-medium">Bachelor Of Commerce</h4>
                    <span className="text-pm-accent text-sm">2018 - 2021</span>
                  </div>
                  <p className="text-pm-light/70 text-sm">Rajasthan University</p>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <h4 className="font-medium">B.Voc in Hotel Management</h4>
                    <span className="text-pm-accent text-sm">2017 - 2020</span>
                  </div>
                  <p className="text-pm-light/70 text-sm">DSHM</p>
                </div>
              </div>
            </div>
            
            <div className="glass bg-gradient-to-bl from-pm-gray/80 to-pm-gray/40 p-8 rounded-2xl border border-white/10 shadow-xl shadow-pm-accent/5 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-3 mb-6">
                <Award size={20} className="text-pm-accent" />
                <h3 className="text-xl font-medium text-gradient">Certifications</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="skill-pill group hover:bg-pm-accent/20 transition-all">
                  <span className="group-hover:text-pm-accent transition-colors">Product-led Certification</span>
                </div>
                <div className="skill-pill group hover:bg-pm-accent/20 transition-all">
                  <span className="group-hover:text-pm-accent transition-colors">Product Analytics</span>
                </div>
                <div className="skill-pill group hover:bg-pm-accent/20 transition-all">
                  <span className="group-hover:text-pm-accent transition-colors">Operation Management</span>
                </div>
                <div className="skill-pill group hover:bg-pm-accent/20 transition-all">
                  <span className="group-hover:text-pm-accent transition-colors">Product Lifecycle Management</span>
                </div>
                <div className="skill-pill group hover:bg-pm-accent/20 transition-all">
                  <span className="group-hover:text-pm-accent transition-colors">Product Management</span>
                </div>
                <div className="skill-pill group hover:bg-pm-accent/20 transition-all">
                  <span className="group-hover:text-pm-accent transition-colors">Scrum Certified (SFC)</span>
                </div>
                <div className="skill-pill group hover:bg-pm-accent/20 transition-all">
                  <span className="group-hover:text-pm-accent transition-colors">SQL and Relational Databases</span>
                </div>
                <div className="skill-pill group hover:bg-pm-accent/20 transition-all">
                  <span className="group-hover:text-pm-accent transition-colors">Fundamentals of Digital Marketing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
