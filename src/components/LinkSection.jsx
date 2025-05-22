import React from 'react';

const LinkSection = ({ title, links }) => {
  return (
    <section className="link-section">
      <h3 className="section-label">{title}</h3>
      <ul className="links-list">
        {links.map((link, index) => (
          <li key={index}>
            <a 
              href={link.url} 
              onClick={(e) => {
                if (link.handleClick) {
                  e.preventDefault();
                  link.handleClick();
                }
              }}
            >
              <img src={link.icon} className="icon-img" alt={`${link.text} icon`} />
              <span>{link.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LinkSection;
