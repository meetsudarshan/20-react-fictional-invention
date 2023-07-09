import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'What Right Now- Where you can check your daily weather and restaurants nearby',
      image: "./Images/whatrightnow.jpg",
      deployLink: 'https://meetsudarshan.github.io/WhatRightNow/',
      repoLink: 'https://github.com/meetsudarshan/WhatRightNow'
    },
    {
      id: 2,
      title: '100 Japanese Castles- Pocket guide to the Japanese Castles for visitors',
      image: "./Images/Japanese Castles.jpg",
      deployLink: 'https://rocky-fortress-11303.herokuapp.com/login',
      repoLink: 'https://github.com/meetsudarshan/100-famous-castles'
    },
    {
      id: 3,
      title: 'Odd Jobs- A website to browse your neighborhood handymen and book them for service',
      image: "./Images/OddJobs.jpg",
      deployLink: 'To be deployed',
      repoLink: 'https://github.com/JacobRubino/OddJobs'
    },
    {
      id: 4,
      title: 'Work Day Scheduler- A website which allows you to schedule your work better',
      image: "./Images/workdayscheduler.jpg",
      deployLink: 'https://meetsudarshan.github.io/05-ThirdParty-API-Challenge/',
      repoLink: 'https://github.com/meetsudarshan/05-ThirdParty-API-Challenge'
    },
    // Add more project objects as needed
  ];

  return (
    <section>
      <h2>My Portfolio</h2>
      <div className="card portfolio-card" style={{ backgroundColor: 'lightyellow' }}>
        <div className="card-content">
          <div className="projects">
            <p style={{ fontSize: '1.2rem', color: 'blue' }}>
              Welcome to my portfolio! Here, you can find some sample projects that I have worked on.
              These projects demonstrate my skills and expertise in building single-page applications using React.
              By sharing these projects, I aim to provide potential hirers with a glimpse of my abilities and the quality of work I can deliver.
            </p>
            <p style={{ fontSize: '1.2rem', color: 'blue' }}>
              It is crucial for hirers to view these projects as they serve as concrete examples of my capabilities as a web developer.
              They showcase my proficiency in implementing various features, handling complex functionalities, and creating visually appealing user interfaces.
              Moreover, these projects reflect my dedication and passion for crafting well-structured and maintainable code.
            </p>
          </div>
        </div>
      </div>
      <div className="card portfolio-card" style={{ backgroundColor: 'lightblue' }}>
        <div className="card-content">
          <div className="card-row">
            {projects.map(project => (
              <div key={project.id} className="card" style={{ backgroundColor: 'lightblue', flex: '1', margin: '0 10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'red', textAlign: 'center', marginBottom: '10px' }}>{project.title}</h3>
                <div className="project-links" style={{ marginBottom: '10px' }}>
                  <a href={project.deployLink} target="_blank" rel="noopener noreferrer">Deployed App</a>
                  <span style={{ margin: '0 10px' }}></span>
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                </div>
                <div style={{ border: '1px solid black', margin: '10px 0', display: 'flex', justifyContent: 'center' }}>
                  <img src={project.image} alt={project.title} style={{ width: '50%', height: 'auto' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="card portfolio-card" style={{ backgroundColor: 'lightyellow' }}>
        <div className="card-content">
          <p style={{ fontSize: '1.2rem', color: 'blue' }}>
            I am eager to secure a good stable job as a web developer and contribute my skills to a dynamic team.
            With a strong passion for coding and continuous learning, I am committed to delivering high-quality results.
            I believe that my dedication, technical expertise, and problem-solving abilities make me a valuable asset to any organization.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
