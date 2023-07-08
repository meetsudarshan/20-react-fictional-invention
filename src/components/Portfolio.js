import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      image: 'project1.jpg',
      deployLink: 'https://example.com/project1',
      repoLink: 'https://github.com/example/project1'
    },
    {
      id: 2,
      title: 'Project 2',
      image: 'project2.jpg',
      deployLink: 'https://example.com/project2',
      repoLink: 'https://github.com/example/project2'
    },
    // Add more project objects as needed
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        <p>
          Welcome to my portfolio! Here, you can find some sample projects that I have worked on.
          These projects demonstrate my skills and expertise in building single-page applications using React.
          By sharing these projects, I aim to provide potential hirers with a glimpse of my abilities and the quality of work I can deliver.
        </p>
        <p>
          It is crucial for hirers to view these projects as they serve as concrete examples of my capabilities as a web developer.
          They showcase my proficiency in implementing various features, handling complex functionalities, and creating visually appealing user interfaces.
          Moreover, these projects reflect my dedication and passion for crafting well-structured and maintainable code.
        </p>
        {projects.map(project => (
          <div key={project.id} className="project">
            <img src={project.image} alt={project.title} />
            <div className="project-details">
              <h3>{project.title}</h3>
              <div className="project-links">
                <a href={project.deployLink} target="_blank" rel="noopener noreferrer">Deployed App</a>
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p>
        I am eager to secure a good stable job as a web developer and contribute my skills to a dynamic team.
        With a strong passion for coding and continuous learning, I am committed to delivering high-quality results.
        I believe that my dedication, technical expertise, and problem-solving abilities make me a valuable asset to any organization.
      </p>
    </section>
  );
};

export default Portfolio;
