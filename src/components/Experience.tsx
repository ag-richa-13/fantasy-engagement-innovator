
import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Product Manager",
      company: "MyTeam11",
      location: "Jaipur",
      period: "2023 - Present",
      responsibilities: [
        "Conduct daily scrum meetings to ensure effective team communication and collaboration.",
        "Manage product backlogs, track amendments, and prioritize tasks based on business value and customer needs.",
        "Collaborate with the UI/UX team to create intuitive and user-friendly designs in alignment with user expectations.",
        "Design product personas, wireframes, and prepare comprehensive roadmaps for development guidance and user experience enhancement.",
        "Regularly engage with stakeholders to understand their requirements, gather feedback, and ensure product satisfaction.",
        "Coordinate with vendors for feedback integration and requirement gathering, working closely with developers and the UI/UX team.",
        "Lead sprint planning sessions to ensure alignment with business objectives and efficient task prioritization.",
        "Prepare comprehensive documents, including product roadmaps, user stories, and project plans, to facilitate clear project understanding and execution."
      ]
    },
    {
      title: "Associate Product Manager",
      company: "MyTeam11",
      location: "Jaipur",
      period: "09/2022 - 09/2023",
      responsibilities: [
        "Facilitated daily scrum meetings to enhance team communication and collaboration.",
        "Prioritized backlog items and tracked amendments based on business value and customer needs.",
        "Worked closely with the UI/UX team to develop user-friendly designs aligning with user expectations.",
        "Designed product personas, wireframes, and roadmaps, ensuring alignment with business goals and stakeholder satisfaction as an Associate Product Manager."
      ]
    },
    {
      title: "Sr. CX Business Analyst",
      company: "MyTeam11",
      location: "Jaipur",
      period: "08/2021 - 08/2022",
      responsibilities: [
        "Collaborated cross-functionally with software engineering teams to drive customer experience improvements.",
        "Developed and maintained key performance indicators (KPIs) and dashboards to measure and enhance customer satisfaction.",
        "Led process improvement initiatives to streamline customer touchpoints and optimize the overall customer journey.",
        "Leveraged data-driven insights and analytics to drive continuous improvement in customer experience.",
        "Managed team leave plans and ensured seamless operations during absences."
      ]
    },
    {
      title: "CX Business Analyst",
      company: "MyTeam11",
      location: "Jaipur",
      period: "07/2020 - 08/2021",
      responsibilities: [
        "Analyzed service metrics, customer feedback, and surveys to identify areas for improving the customer experience.",
        "Utilized CRM systems and tools to manage customer data, generate reports, and provide actionable recommendations.",
        "Collaborated with cross-functional teams to implement customer-centric strategies and processes."
      ]
    },
    {
      title: "Customer Relation Manager",
      company: "MyTeam11",
      location: "Jaipur",
      period: "06/2019 - 06/2020",
      responsibilities: [
        "Built strong customer relationships, understanding their needs, preferences, and feedback.",
        "Managed and resolved customer inquiries, complaints, and escalations, ensuring high levels of satisfaction.",
        "Provided in-depth product knowledge, conducted product demonstrations, and facilitated customer onboarding."
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-pm-gray/50 relative">
      <div className="bg-blur-circle w-[400px] h-[400px] bg-pm-accent/10 top-20 right-0"></div>
      
      <div className="container-custom mx-auto">
        <div className="text-center mb-16">
          <h2 className="inline-block text-gradient pb-2 mb-2">Work Experience</h2>
          <div className="h-1 w-20 bg-pm-accent/50 mx-auto"></div>
          <p className="text-pm-light/70 mt-4 max-w-2xl mx-auto">
            Over 5 years of progressive experience in product management and customer experience roles.
          </p>
        </div>
        
        <div className="glass p-8 md:p-10 animate-fade-in">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-medium">{exp.title}</h3>
                    <div className="flex items-center text-pm-light/70 text-sm mt-1">
                      <Briefcase size={14} className="mr-2" />
                      <span>{exp.company}, {exp.location}</span>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-pm-accent/20 text-pm-accent text-sm font-medium">
                    {exp.period}
                  </div>
                </div>
                <ul className="space-y-2 text-pm-light/80">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="relative pl-5 before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-pm-accent/50 before:rounded-full">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
