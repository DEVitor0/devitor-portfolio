import logo from '../../../assets/icons/D.png';
import li from '../../../assets/icons/linkedIn-icon.png';
import gh from '../../../assets/icons/github-icon.png';
import news from '../../../assets/icons/newsIcon.png';
import suitcase from '../../../assets/icons/projectsIcon.svg';
import email from '../../../assets/icons/gmail-icon.png';
import img from '../../../assets/icons/imageIcon.png';
import about from '../../../assets/icons/findIcon.png';
import './boxmenudrop.css';

import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const BoxMenuDrop = () => {
  const [isActive, setActive] = useState('false');

  // Toggle the dropdown
  const handleToggle = () => {
    setActive(!isActive);
  };

  // Hide the dropdown when user clicks outside the element
  function useOutsideHandler(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target.parentElement)) {
          setActive(!!isActive);
        }
      }

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideHandler(wrapperRef);

  return (
    <div className="dropdown" onClick={handleToggle} ref={wrapperRef}>
      <FontAwesomeIcon className="fas fa-th dropbtn" icon={faTh} />
      <div
        id="drop"
        className={
          isActive
            ? 'dropdown-content-cont dropdown-hide'
            : 'dropdown-content-cont dropdown-show'
        }
      >
        <div className="drop-item">
          <Link className="drop-link" to="/">
            <img src={logo} alt="" />
            <p> Pesquisa </p>
          </Link>
          <Link className="drop-link" to="/sobre">
            <img src={about} alt="" />
            <p> Perfil </p>
          </Link>
          <Link className="drop-link" to="/projetos">
            <img src={suitcase} alt="" />
            <p> Projetos </p>
          </Link>
          <Link className="drop-link" to="/artigos">
            <img src={news} alt="" />
            <p> Artigos </p>
          </Link>
          <Link className="drop-link" to="/imagens">
            <img src={img} alt="" />
            <p> Imagens </p>
          </Link>
          <a className="drop-link" href="mailto:vitormoreira6940@gmail.com">
            <img src={email} alt="" />
            <p> Email </p>
          </a>
          <a className="drop-link" href="https://github.com/DEVitor0">
            <img src={gh} alt="" />
            <p> GitHub </p>
          </a>
          <a
            className="drop-link"
            href="https://www.linkedin.com/in/vitor-moreira-960698303/"
          >
            <img src={li} alt="" />
            <p> LinkedIn </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BoxMenuDrop;
