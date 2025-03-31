
import React from 'react';

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
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-pm-light/90 font-medium">{name}</span>
        <span className="text-pm-accent">{percentage}%</span>
      </div>
      <div className="h-2 w-full bg-pm-gray rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-pm-accent to-purple-500 rounded-full"
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
          <div className="h-1 w-20 bg-pm-accent/50 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="glass p-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-medium mb-6 text-gradient">Technical Skills</h3>
            {technicalSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} />
            ))}
          </div>
          
          <div className="glass p-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl font-medium mb-6 text-gradient">Tools</h3>
            {toolSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} />
            ))}
            
            <div className="mt-12">
              <h3 className="text-xl font-medium mb-6 text-gradient">Personal Skills</h3>
              {personalSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} />
              ))}
            </div>
          </div>
          
          <div className="md:col-span-2 lg:col-span-1 glass p-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-medium mb-6 text-gradient">Key Achievements</h3>
            <div className="space-y-6">
              <div className="relative pl-6 before:absolute before:left-0 before:top-1.5 before:w-3 before:h-3 before:bg-pm-accent before:rounded-full">
                <h4 className="text-lg font-medium mb-2">Safe Play Mode</h4>
                <p className="text-pm-light/80">
                  Introduced a feature aligning participant deadlines with match times and showing player lineups, enhancing accuracy in fantasy team creation. This groundbreaking feature became an industry standard widely adopted.
                </p>
              </div>
              
              <div className="relative pl-6 before:absolute before:left-0 before:top-1.5 before:w-3 before:h-3 before:bg-pm-accent before:rounded-full">
                <h4 className="text-lg font-medium mb-2">Winning Conversion Feature</h4>
                <p className="text-pm-light/80">
                  Enhanced user engagement by converting winnings to wallet balances, addressing tax concerns and improving user retention.
                </p>
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-medium mb-6 text-gradient">Awards</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-pm-accent/20 text-pm-accent">
                      2023
                    </div>
                    <div>
                      <h4 className="font-medium">The Creative Idea Award</h4>
                      <p className="text-pm-light/70 text-sm">Recognition for innovative product solutions</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-pm-accent/20 text-pm-accent">
                      2022
                    </div>
                    <div>
                      <h4 className="font-medium">Rising Star Award</h4>
                      <p className="text-pm-light/70 text-sm">For exceptional growth and impact</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-pm-accent/20 text-pm-accent">
                      2021
                    </div>
                    <div>
                      <h4 className="font-medium">Shining Star Award</h4>
                      <p className="text-pm-light/70 text-sm">Outstanding performance and dedication</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-pm-accent/20 text-pm-accent">
                      2020
                    </div>
                    <div>
                      <h4 className="font-medium">Employee of the year</h4>
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
