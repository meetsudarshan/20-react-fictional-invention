import React from 'react';

const Resume = () => {
  const proficiencies = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Express',
    // Add more proficiencies as needed
  ];

  const certifications = [
    'AWS Cloud Practitioner',
    'Guidewire ACE Business Professional',
    'Certified ScrumMaster',
    'Certified Product Owner/Product Manager (POPM)',
    'Certified Salesforce Administrator',
    // Add more certifications as needed
  ];

  const ongoingLearning = [
    'Quadient',
    'AWS Associate Architect',
    // Add more ongoing learning topics as needed
  ];

  return (
    <section>
      <h2>Resume</h2>
      <div className="resume">
        <a href="./resume.pdf" download>Download Resume</a>
      </div>
      <div className="card light-green-card">
        <div className="card-content">
          <h4>Proficiencies</h4>
          <ul>
            {proficiencies.map((proficiency, index) => (
              <li key={index}>{proficiency}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="card light-green-card">
        <div className="card-content">
          <h4>Certifications</h4>
          <ul>
            {certifications.map((certification, index) => (
              <li key={index}>{certification}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="card light-green-card">
        <div className="card-content">
          <h4>Ongoing Learning</h4>
          <ul>
            {ongoingLearning.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
