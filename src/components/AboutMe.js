import React from 'react';

const AboutMe = () => {
  return (
    <section>
      <h2>About Me</h2>
      <div className="card profile-card">
        <div className="card-content">
          <div className="profile">
            <div className="profile-details">
              <img src="avatar.jpg" alt="Profile Avatar" />
              <div className="bio">
                <h3>John Doe</h3>
                <p>
                  Hello! I'm John Doe, a passionate web developer with experience in building single-page applications using React.
                  I enjoy working on front-end development and creating intuitive user interfaces.
                  With a strong foundation in HTML, CSS, and JavaScript, I strive to deliver high-quality code and exceptional user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card bio-card">
        <div className="card-content">
          <div className="skills">
            <h4>Skills</h4>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Responsive Web Design</li>
              {/* Add more skills as needed */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
