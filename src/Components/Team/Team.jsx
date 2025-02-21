import React from "react";
import "./Team.css";
import digendra from "../images/Team/digendra.jpg";
import adithya from "../images/Team/adithya.jpg";
import pranjal from "../images/Team/pranjal.jpeg";

const Team = () => {
  return (
    <section className="team-section" id="team">
      <div className="black">
        <div className="text-container">
          <h1>The Team</h1>
          <p>
            We are team of UCPI, storytellers and developers on a mission to
            onboard 1 Billion users on Web3.
          </p>
        </div>
        <div className="member-container">
          <div className="member">
            <div className="img-wrapper">
              <img src={digendra} alt="Digendra Singh Rathore" />
            </div>
            <h1>Digendra Singh Rathore</h1>
            <p>Co-Founder, CEO</p>
            <p>[IIT Roorkee]</p>
            {/* 
            <div className="links">
              <a href="https://www.linkedin.com/in/dsriitr/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/dsr_iitr?t=KaGZ1oNXOZZNjPTk-Pa8IQ&s=08" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div> 
            */}
          </div>

          <div className="member">
            <div className="img-wrapper">
              <img src={adithya} alt="Aditya Singh Rathore" />
            </div>
            <h1>Aditya Singh Rathore</h1>
            <p>Co-Founder, CPO</p>
            <p>[IIM Sirimour]</p>
            {/* 
            <div className="links">
              <a href="https://www.linkedin.com/in/adityarathore/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/adie_raro?t=JiSibwOrIxAO_c82xNe-bA&s=08" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div> 
            */}
          </div>


        </div>
      </div>
    </section>
  );
};

export default Team;
