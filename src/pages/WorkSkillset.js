import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const skills = [
  { name: 'UI/UX - Figma & Adobe CC', percentage: 85 },
  { name: 'Qualitative and Quntitative Research', percentage: 85 },
  { name: 'Design Systems', percentage: 80 },
  { name: 'Project Management', percentage: 80 },
  { name: 'Test Management - Maze and Zephyr Scale', percentage: 85 },
  { name: 'Web / Mobile App UI Development', percentage: 85 },
  { name: 'WordPress and HubSpot CMS', percentage: 85 },
  { name: 'Agile Methodology (Jira, Sprint, Scrum, Kanban)', percentage: 85 },
  { name: 'Global Admin: SharePoint, GitHub, GCP, AWS', percentage: 85 },
  { name: 'React JS, Programming, and Linux Servers', percentage: 55 },
];

const Skillset = () => {
  return (
    <div className="col-lg-6 mt-5">
      <div className="about-content">
        <div className="section-header text-left">
          <p className='sectionSeparator'>Strengths</p>
          <h2>Skillset</h2>
        </div>
        <div className="skills">
          {skills.map((skill, index) => (
            <div className="skill-name text-start" key={index}>
              <p>{skill.name}</p>
              <ProgressBar now={skill.percentage} label={``} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skillset;
