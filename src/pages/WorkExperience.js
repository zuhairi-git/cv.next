import React from 'react';

const experiences = [
  {
    date: '2017 - Present',
    position: 'Professional Product Designer',
    company: 'Reslink, Espoo, Finland',
    description: 'Workflow and Cloud Management, WebApp (SaaS), and Mobile.',
  },
  {
    date: '2016 - Present',
    position: 'Senior UI/UX Designer',
    company: 'Reslink, Helsinki, Finland',
    description: 'Web Application UI/UX and Android UI Development.',
  },
  {
    date: '2014 - 2016',
    position: 'Graphic Designer UI/UX',
    company: 'Reslink, Helsinki, Finland',
    description: 'Graphic and Website Designer, Android and iOS Graphics and Prototype.',
  },
  {
    date: '2000 - 2014',
    position: 'Freelance Web and Mobile UI Designer',
    company: 'From Damascus to Espoo',
    description: 'Website and Android Developer.',
  },
  {
    date: 'Long time ago',
    position: 'Graphic Designer and Publisher',
    company: 'Various Magazines and Newspapers — Tehran, Iran',
    description: '',
  },
  {
    date: 'Once upon a time',
    position: 'Junior Publisher - Junior IT Expert',
    company: 'Study and Work',
    description: '',
  },
];

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <div className="container">
        <header className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
          <p className="sectionSeparator">My Resume</p>
          <h2>Working Experience</h2>
        </header>
        <div className="timeline">
          {experiences.map((experience, index) => (
            <div
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} wow zoomIn${index % 2 === 0 ? 'Left' : 'Right'
                }`}
              data-wow-delay={`${0.1 + index * 0.1}s`}
              key={index}
            >
              <div className="timeline-text text-start">
                <div className="timeline-date">{experience.date}</div>
                <h2>{experience.position}</h2>
                <p className='text-black-50'>{experience.company}</p>
                <p>{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
