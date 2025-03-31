
import React from 'react';
import { BarChart3, Wrench, Award } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: "Product Strategy and Roadmapping", percentage: 95 },
    { name: "User-Centered Design (UI/UX)", percentage: 90 },
    { name: "Market Research and Analysis", percentage: 85 },
    { name: "Data-driven Decision Making", percentage: 90 },
    { name: "Agile Methodologies (Scrum)", percentage: 95 },
    { name: "Backlog Prioritization", percentage: 90 },
    { name: "Stakeholder Engagement", percentage: 85 },
    { name: "Prototyping & Wireframing", percentage: 80 },
    { name: "Team Leadership and Collaboration", percentage: 90 },
  ];

  const toolSkills = [
    { name: "JIRA", percentage: 95 },
    { name: "Confluence", percentage: 90 },
    { name: "Whimsical", percentage: 85 },
    { name: "Google Play Console", percentage: 80 },
    { name: "Figma", percentage: 85 },
    { name: "Cucumber", percentage: 75 },
  ];

  const personalSkills = [
    { name: "Leadership", percentage: 90 },
    { name: "Problem-solving", percentage: 95 },
    { name: "Strategic thinking", percentage: 90 },
    { name: "Communication", percentage: 85 },
    { name: "Prioritisation", percentage: 90 },
  ];

  const SkillBar = ({ name, percentage }: { name: string; percentage: number }) => (
    <div className="mb-6 group">
      <div className="flex justify-between mb-2">
        <span className="text-pm-light/90 font-medium group-hover:text-gradient transition-colors">{name}</span>
        <span className="text-pm-accent group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-pm-accent group-hover:to-purple-500 px-2 py-0.5 rounded-full transition-all">{percentage}%</span>
      </div>
      <div className="h-2 w-full bg-pm-gray rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-pm-accent to-purple-500 rounded-full transition-all duration-700 ease-out group-hover:shadow-[0_0_8px_rgba(139,92,246,0.5)]"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="section-padding relative">
      <div className="bg-blur-circle w-[300px] h-[300px] bg-blue-400/10 top-40 left-20"></div>
      
      <div className="container-custom mx-auto">
        <div className="text-center mb-16">
          <h2 className="inline-block text-gradient pb-2 mb-2">Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-pm-accent to-purple-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="glass p-8 rounded-3xl bg-gradient-to-br from-pm-gray/70 via-pm-gray/40 to-pm-gray/60 border border-white/10 shadow-xl shadow-pm-accent/5 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 size={20} className="text-pm-accent" />
              <h3 className="text-xl font-bold text-gradient">Technical Skills</h3>
            </div>
            {technicalSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} />
            ))}
          </div>
          
          <div className="glass p-8 rounded-3xl bg-gradient-to-bl from-pm-gray/70 via-pm-gray/40 to-pm-gray/60 border border-white/10 shadow-xl shadow-pm-accent/5 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-3 mb-6">
              <Wrench size={20} className="text-pm-accent" />
              <h3 className="text-xl font-bold text-gradient">Tools</h3>
            </div>
            {toolSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} />
            ))}
            
            <div className="mt-12">
              <div className="flex items-center gap-3 mb-6">
                <Award size={20} className="text-pm-accent" />
                <h3 className="text-xl font-bold text-gradient">Personal Skills</h3>
              </div>
              {personalSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} />
              ))}
            </div>
          </div>
          
          <div className="md:col-span-2 lg:col-span-1 glass p-8 rounded-3xl bg-gradient-to-tr from-pm-gray/70 via-pm-gray/40 to-pm-gray/60 border border-white/10 shadow-xl shadow-pm-accent/5 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-bold text-gradient mb-6">Key Achievements</h3>
            <div className="space-y-6">
              <div className="relative pl-6 before:absolute before:left-0 before:top-1.5 before:w-3 before:h-3 before:bg-gradient-to-br before:from-pm-accent before:to-purple-500 before:rounded-full hover:pl-8 hover:before:w-4 hover:before:h-4 hover:before:top-1 transition-all">
                <h4 className="text-lg font-medium mb-2 hover:text-gradient transition-colors">Safe Play Mode</h4>
                <p className="text-pm-light/80">
                  Introduced a feature aligning participant deadlines with match times and showing player lineups, enhancing accuracy in fantasy team creation. This groundbreaking feature became an industry standard widely adopted.
                </p>
              </div>
              
              <div className="relative pl-6 before:absolute before:left-0 before:top-1.5 before:w-3 before:h-3 before:bg-gradient-to-br before:from-pm-accent before:to-purple-500 before:rounded-full hover:pl-8 hover:before:w-4 hover:before:h-4 hover:before:top-1 transition-all">
                <h4 className="text-lg font-medium mb-2 hover:text-gradient transition-colors">Winning Conversion Feature</h4>
                <p className="text-pm-light/80">
                  Enhanced user engagement by converting winnings to wallet balances, addressing tax concerns and improving user retention.
                </p>
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-bold text-gradient mb-6">Awards</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 p-2 rounded-xl hover:bg-pm-gray/30 transition-colors">
                    <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-pm-accent/30 to-purple-500/30 text-white">
                      2023
                    </div>
                    <div>
                      <h4 className="font-medium text-gradient">The Creative Idea Award</h4>
                      <p className="text-pm-light/70 text-sm">Recognition for innovative product solutions</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4 p-2 rounded-xl hover:bg-pm-gray/30 transition-colors">
                    <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-pm-accent/30 to-purple-500/30 text-white">
                      2022
                    </div>
                    <div>
                      <h4 className="font-medium text-gradient">Rising Star Award</h4>
                      <p className="text-pm-light/70 text-sm">For exceptional growth and impact</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4 p-2 rounded-xl hover:bg-pm-gray/30 transition-colors">
                    <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-pm-accent/30 to-purple-500/30 text-white">
                      2021
                    </div>
                    <div>
                      <h4 className="font-medium text-gradient">Shining Star Award</h4>
                      <p className="text-pm-light/70 text-sm">Outstanding performance and dedication</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4 p-2 rounded-xl hover:bg-pm-gray/30 transition-colors">
                    <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-pm-accent/30 to-purple-500/30 text-white">
                      2020
                    </div>
                    <div>
                      <h4 className="font-medium text-gradient">Employee of the year</h4>
                      <p className="text-pm-light/70 text-sm">Top performer across all departments</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
