import React from 'react';
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import './components.css';

const HeroSection = () => {
  return (
    <div>
      <section className="hero-section">
        <div className="socials">
          <a href="#">
            <FiTwitter />
          </a>
          <a href="#">
            <AiOutlineLinkedin />
          </a>
          <a href="#">
            <AiOutlineGithub />
          </a>
          <a href="#">
            <AiOutlineYoutube />
          </a>
          <span className="line"></span>
        </div>
        <div className="hero-section-text">
          <p className="hi"> Hi There I'm</p>
          <span className="">
            <h1 className="">
              <span>Ebenzer </span> Ametepeh
            </h1>
            <p>And i Build things that Live on the internet</p>
          </span>
          <div
            className="
          intro"
          >
            {' '}
            <p>
              I’m a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences for both web and mobile
              platforms. Currently, I’m focused on building Continous
              Intergration Continuos Deployment(CICD) solutions for
              organizations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
