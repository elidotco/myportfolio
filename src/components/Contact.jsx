import React from 'react';

import './projects.css';

const Contact = () => {
  return (
    <footer id="contact">
      <div className="contact-container">
        <div className="contact-item ">
          <h3 className="c-title">Get In Touch</h3>
          <p>
            If you have any questions, feel free to contact me. I am always open
            to discussing new projects and opportunities.
          </p>

          <a href="mailto:eddiefest@outlook.com" className="btne">
            say hello
          </a>
        </div>
      </div>
      <div className="foot-note">
        <p>Designed by Ebenezer</p>
      </div>
    </footer>
  );
};

export default Contact;
