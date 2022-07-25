import React, { useState } from 'react';
import './components.css';

const Wh = () => {
  const [Wh, setWh] = useState([
    {
      id: 1,
      name: 'Lac Global',
      year: 'Jnuary 2022- may 2022',
      description:
        ' I worked as an intern on their Go waste project doing work on the front end of their website',
    },
    {
      id: 2,
      name: 'BTTA',
      year: 'febuary 2020- june 2021',
      description:
        'I wworked on a contract based employennt on the front end and optimisation their website',
    },
  ]);

  const toggleThings = (id) => {
    return (
      <>
        {Wh.filter((wh) => wh.id === id).map((wh) => (
          <>
            <div className="wh-item-name">
              <h3>{wh.name}</h3>
            </div>
            <div className="wh-item-year">
              <p>{wh.year}</p>
            </div>
            <div className="wh-item-description">
              <p>{wh.description}</p>
            </div>
          </>
        ))}
      </>
    );
  };
  return (
    <div className="about-me wh">
      <div className="wh-title">
        <h2>Where I have worked</h2>
        <span className="line horizon"></span>
      </div>

      <div className="wh-content">
        {Wh.map((wh) => (
          <div className="wh-item" key={wh.id}>
            <span className="c-name">{wh.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wh;
