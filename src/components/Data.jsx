import React from 'react';
import './components.css';

const Data = () => {
  return (
    <div className="about-me data">
      <div className="card clients">
        <span className="value">21+</span>
        <span className="card-title">Clients</span>
      </div>
      <div className="card projects">
        <span className="value">30</span>
        <span className="card-title">Projects</span>
      </div>
      <div className="card Awards">
        <span className="value">2</span>
        <span className="card-title">Awards</span>
      </div>
      <div className="card years">
        <span className="value">2</span>
        <span className="card-title">Years Of Experience</span>
      </div>
    </div>
  );
};

export default Data;
