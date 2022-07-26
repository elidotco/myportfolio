import React, { useState } from 'react';
import portfolio from '../images/portfolio-02.jpg';
import './projects.css';
const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'Lac Global',
      year: 'Jnuary 2022- may 2022',
      tag: 'Web Development',
      imageUrl: portfolio,
      liveLink: 'https://lacglobal.com',
    },
    {
      id: 2,
      name: 'BTTA',
      year: 'febuary 2020- june 2021',
      tag: 'Web Development',
      imageUrl: portfolio,
      liveLink: 'https://bttacom.com',
    },
    {
      id: 3,
      name: 'Lac Global',
      year: 'Jnuary 2022- may 2022',
      tag: 'Web Development',
      imageUrl: portfolio,
      liveLink: 'https://lacglobal.com',
    },
    {
      id: 4,
      name: 'BTTA',
      year: 'febuary 2020- june 2021',
      tag: 'Web Design',
      imageUrl: portfolio,
      liveLink: 'https://bttacom.com',
    },
  ]);
  const [works, setWork] = useState([
    {
      id: 1,
      name: 'All',
      class: 'wk all active',
      projects: projects.map((project) => (
        <div className="projects-item">
          <div className="image-container">
            <a href="#">
              <img src={project.imageUrl} alt="project" />
            </a>
          </div>

          <div className="project-item-details">
            <span className="project-item-name">
              <h3>{project.name}</h3>
            </span>
            <span className="project-item-year">
              <p>{project.year}</p>
            </span>
            <span className="project-item-tag">
              <p>{project.tag}</p>
            </span>
          </div>
        </div>
      )),
      show: true,
    },
    {
      id: 2,
      name: 'Web Development',
      class: 'wk web-dev',
      projects: projects.map((project) => {
        if (project.tag === 'Web Development') {
          return (
            <div className="projects-item">
              <div className="image-container">
                <img src={project.imageUrl} alt="project" />
              </div>
              <div className="project-item-details">
                <span className="project-item-name">
                  <h3>{project.name}</h3>
                </span>
                <span className="project-item-year">
                  <p>{project.year}</p>
                </span>
                <span className="project-item-tag">
                  <p>{project.tag}</p>
                </span>
              </div>
            </div>
          );
        }
      }),
      show: false,
    },
    {
      id: 3,
      name: 'Web Design',
      class: 'wk web-design',
      projects: projects.map((project) => {
        if (project.tag === 'Web Design') {
          return (
            <div className="projects-item">
              <div className="image-container">
                <img src={project.imageUrl} alt="project" />
              </div>
              <div className="project-item-details">
                <span className="project-item-name">
                  <h3>{project.name}</h3>
                </span>
                <span className="project-item-year">
                  <p>{project.year}</p>
                </span>
                <span className="project-item-tag">
                  <p>{project.tag}</p>
                </span>
              </div>
            </div>
          );
        }
      }),
      display: false,
    },
  ]);

  const toggleProjects = (id) => {
    setWork(
      works.map((work) => {
        if (work.id !== id && work.show === true) {
          work.show = false;
        } else if (work.id === id) {
          work.show = !work.show;
          console.log(work.show);
          console.log(work.projects);
        }
        return work;
      })
    );
  };

  return (
    <div className="works" id="projects">
      <div className="about-title">
        <h2>Projects</h2>

        <span className=" horizone"></span>
      </div>
      <div className="projects-content">
        <div className="projects-titles">
          {works.map((work, index) => (
            <span
              className={work.class}
              key={index}
              onClick={() => {
                toggleProjects(work.id);
              }}
            >
              {work.name}
            </span>
          ))}
        </div>
        <div className="projects-items">
          {works.map((work, index) => (
            <>{work.show ? work.projects : null}</>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
