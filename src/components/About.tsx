
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="bg-blur-circle w-[300px] h-[300px] bg-blue-500/10 bottom-20 -left-20"></div>
      
      <div className="container-custom mx-auto">
        <div className="text-center mb-16">
          <h2 className="inline-block text-gradient pb-2 mb-2">About Me</h2>
          <div className="h-1 w-20 bg-pm-accent/50 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glass p-8 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-medium mb-6">Profile Summary</h3>
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
            <div className="glass p-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xl font-medium mb-6">Education</h3>
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
            
            <div className="glass p-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-medium mb-6">Certifications</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="skill-pill">Product-led Certification</div>
                <div className="skill-pill">Product Analytics</div>
                <div className="skill-pill">Operation Management</div>
                <div className="skill-pill">Product Lifecycle Management</div>
                <div className="skill-pill">Product Management</div>
                <div className="skill-pill">Scrum Certified (SFC)</div>
                <div className="skill-pill">SQL and Relational Databases</div>
                <div className="skill-pill">Fundamentals of Digital Marketing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
