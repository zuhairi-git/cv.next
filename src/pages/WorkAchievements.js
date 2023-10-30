import React from 'react';

const achievementsData = [
  {
    title: 'Research (SaaS)',
    text: 'Spearheaded research and led the UI design for the backend of the Modular SaaS platform.',
    image: require('../img/pexels-4.jpg'),
    hidden: true,
  },
  {
    title: 'UI/UX',
    text: 'Created UI and UX frameworks for various platforms utilized across the company.',
    image: require('../img/pexels-4.jpg'),
    hidden: true,
  },
  {
    title: 'B2B2C eCommerce',
    text: 'Designed and developed 3 eCommerce platforms for B2B2C customers on Linux server.',
    image: require('../img/pexels-4.jpg'),
    hidden: true,
  },
  {
    title: 'CRM/CMS',
    text: 'Created and managed the blog in HubSpot, contributing to sales and marketing efforts.',
    image: require('../img/pexels-4.jpg'),
    hidden: true,
  },
  {
    title: 'Documentation',
    text: 'Engaged actively in the creation of projects and feature documentation.',
    image: require('../img/pexels-4.jpg'),
    hidden: true,
  },
  {
    title: 'Prototype',
    text: "Revamped the Mobile Application's UI and UX to deliver a notably enhanced user experience.",
    image: require('../img/pexels-4.jpg'),
    hidden: true,
  },
  {
    title: 'Design System',
    text: 'Prototyped the new Android UI and UX based on Googles Design System MUI 3.',
    image: require('../img/pexels-4.jpg'),
    hidden: true,
  },
  {
    title: 'Websites',
    text: 'Designed and developed 3 company websites with Linux server setup (LAMP).',
    image: require('../img/pexels-4.jpg'),
    hidden: true,
  },
  {
    title: 'Testing',
    text: 'Created a Testing framework in Jira to improve bug fixing and feature testing.',
    image: require('../img/pexels-4.jpg'),
    hidden: true,
  },
  {
    title: 'Workflow',
    text: 'Implemented various Workflows for different applications (Web, Mobile, and eCommerce).',
    image: require('../img/pexels-4.jpg'),
    hidden: true,
  },

  {
    title: 'IT Expert',
    text: 'Established a VPN solution for the development portal and introduced Mobile Device Management (MDM) for device administration.',
    image: require('../img/pexels-4.jpg'),
    hidden: true,
  },

];

const AchievementCard = ({ achievement }) => {
  return (
    <div className="card brandBg text-light mb-3 d-flex border-0">
      {/* Check the hidden flag before rendering the image */}
      {achievement.hidden ? null : (
        <img
          src={achievement.image}
          alt="Achievement"
          className="card-img-top object-fit-cover"
          style={{ maxHeight: '10px' }}
        />
      )}
      <div className="card-body flex-grow-1">
        <h5 className='text-center fw-bold text-light'>{achievement.title}</h5>
        <div className="titleUnderLine mb-4"></div>
        <p className="card-text">{achievement.text}</p>
      </div>
    </div>

  );
};

const Achievements = () => {
  // Divide achievementsData into three columns
  const columnSize = Math.ceil(achievementsData.length / 3);
  const column1 = achievementsData.slice(0, columnSize);
  const column2 = achievementsData.slice(columnSize, columnSize * 2);
  const column3 = achievementsData.slice(columnSize * 2);

  return (
    <div className="container" id="achievements">
      <div className="sectionSeparatorBG">
        <header className="section-header text-center wow zoomIn pt-3" data-wow-delay="0.1s">
          <p className="sectionSeparator">A Journey of Success</p>
          <h2>Achievements and Milestones</h2>
        </header>
        <div className="row p-4 justify-content-center pb-5">
          <div className="col-md-3 wow zoomIn" data-wow-delay="0.1s">
            {column1.map((achievement, index) => (
              <AchievementCard key={index} achievement={achievement} />
            ))}
          </div>
          <div className="col-md-3 wow zoomIn" data-wow-delay="0.2s">
            {column2.map((achievement, index) => (
              <AchievementCard key={index} achievement={achievement} />
            ))}
          </div>
          <div className="col-md-3 wow zoomIn" data-wow-delay="0.3s">
            {column3.map((achievement, index) => (
              <AchievementCard key={index} achievement={achievement} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default Achievements;