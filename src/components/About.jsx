import React from 'react';
import ome from '../images/ome.jpg';
import './components.css';

const About = () => {
  return (
    <div className="about-me">
      <div id="about" className="about-title">
        <h2> About me</h2>
        <span className="line horizon"></span>
      </div>
      <div className="about-content">
        <div className="about-text">
          <p>
            Fast-forward to today, and I’ve had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <div className="skills">
            <span>
              <p>HTML/CSS</p>
              <p>Javascript</p>
              <p>React</p>
            </span>
            <span>
              <p>NodeJS</p>
              <p>Express</p>
              <p>MongoDB</p>
            </span>
          </div>
        </div>
        <div className="about-img">
          <div className="about-img-container">
            <div className="img">
              <img src={ome} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
