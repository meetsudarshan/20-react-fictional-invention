import React from 'react';
import Skills from './Skills'; // Import the Skills component

const AboutMe = () => {
  return (
    <section>
      <h2>Meet Sudarshan Samaddar</h2>
      <div className="card profile-card">
        <div className="card-content">
          <div className="profile">
            <div className="profile-details">
              <img src="./Images/me.jpg" alt="me me me" />
              <div className="bio">
                <h3>Sudarshan Samaddar</h3>
                <p>
                  Hello! I'm Sudarshan Samaddar, a passionate web developer with experience in building single-page applications using React.
                  I enjoy working on front-end development and creating intuitive user interfaces.
                  With a strong foundation in HTML, CSS, and JavaScript, I strive to deliver high-quality code and exceptional user experiences.
                </p>
                <p>
                  My journey began in India, where I had the privilege of growing up in a culturally rich environment. The exposure to Indian heritage, particularly from East Bengal, instilled in me a deep appreciation for tradition and diversity.
                </p>
                <p>
                  Education played a vital role in shaping my path. Attending a reputable school, I embraced the challenges and managed to achieve better than average grades. In 2009, a life-changing opportunity emerged when I joined a prestigious software company. This experience taught me the value of independence as I relocated far from home to pursue my professional aspirations.
                </p>
                <p>
                  In 2013, another significant milestone came my way when I embarked on a journey to the United States. Working closely with onshore clients, I gained invaluable insights into the intricate dynamics of the industry. This immersive experience broadened my horizons and deepened my understanding of the software development workflow.
                </p>
                <p>
                  Today, I serve as a Business Analyst and Function QA Lead, primarily in the insurance domain. While the industry landscape continues to evolve, I have embraced the challenge by embarking on a coding bootcamp. This endeavor has enriched my technical skills and solidified my passion for web development.
                </p>
                <p>
                  Combining my expertise in HTML, CSS, JavaScript, and React, I strive to deliver outstanding results. Creating captivating user interfaces and ensuring exceptional user experiences remain at the core of my work. I am driven by a dedication to quality and a commitment to continuous learning.
                  <br></br>
      <br></br>
      <br></br>


      Please visit my portfolio page to check some of my works so far. If you are impressed with my work please dont hesitate to contact me by visiting the contact page. 

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Skills /> {/* Include the Skills component here */}
    </section>
  );
};

export default AboutMe;
