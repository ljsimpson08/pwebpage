import './index.css'
import React from 'react';

const Contact = () => {
  return (
    <section className="section">
      <div className="main">
        <header className="title">
          My Linkedin
        </header>
        <p className="paragraph">
          <a href="https://www.linkedin.com/in/loyd-simpson-608a9461/">
            Navigate to my Linkedin here
          </a>
        </p>
        <header className="title">
          My Email
        </header>
        <p className="paragraph">
          <a href='ljsimpson08@gmail.com'>
            Use this to email me directly
          </a>
        </p>
        <header className="title">
          Obligatory auto-contact form
        </header>
        <p className="paragraph">
          Placer holder
        </p>
      </div>
    </section>
  );
};

export default Contact;