import './logo.css';
import React, { useEffect, useRef } from 'react';

const Logo = ({ name }) => {
  const logoRef = useRef(null);

  useEffect(() => {
    if (logoRef.current) {
      let logo = name.trim();
      logoRef.current.innerHTML = '';

      const colorPattern = ['blue', 'red', 'yellow', 'green'];

      for (let i = 0; i < logo.length; i++) {
        const letter = document.createElement('h1');
        const colorIndex = i % colorPattern.length;
        letter.className = colorPattern[colorIndex];
        letter.appendChild(document.createTextNode(logo[i]));
        logoRef.current.appendChild(letter);
      }
    }
  }, [name]);

  return (
    <div className="search-logo">
      <div className="logo-text" ref={logoRef}>
        {name}
      </div>
    </div>
  );
};

export default Logo;
