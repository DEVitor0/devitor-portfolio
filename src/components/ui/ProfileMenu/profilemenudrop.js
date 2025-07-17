import './profilemenudrop.css';
import { Link } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import vitorImg from '../../../assets/images/vitor.png'; // Importação da imagem

const ProfileMenuDrop = () => {
  const [isProfileActive, setProfileActive] = useState(false); // booleano

  // Toggle the dropdown
  const handleToggle = () => {
    setProfileActive(!isProfileActive);
  };

  // Hide the dropdown when user clicks outside the element
  function useOutsideHandler(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setProfileActive(false); // fecha o dropdown ao clicar fora
        }
      }

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperProfileRef = useRef(null);
  useOutsideHandler(wrapperProfileRef);

  return (
    <div
      className="profile dropdown"
      onClick={handleToggle}
      ref={wrapperProfileRef}
    >
      <img className="profile-pic dropbtn" src={vitorImg} alt="Perfil" />
      <div className="profile-hightlight-dropdown">
        <p> Portfolio Website </p>
        <p> Vitor Moreira</p>
        <p> devitormoreira@gmail.com </p>
      </div>
      <div
        className={
          isProfileActive
            ? 'profile-details-dropdown dropdown-show'
            : 'profile-details-dropdown dropdown-hide'
        }
      >
        <div className="first-detail">
          <img className="" src={vitorImg} alt="profile" />
          <p className="detail-text"> Vitor Moreira </p>
          <p className="detail-text"> devitormoreira@gmail.com </p>
        </div>
        <Link className="second-detail" to="/about">
          <FontAwesomeIcon className="fa-user-plus" icon={faUserPlus} />
          <p> Mais sobre mim </p>
        </Link>
        <div className="third-detail">
          <a href="https://www.linkedin.com/in/vitor-moreira-960698303/">
            LinkedIn
          </a>
          <a href="https://github.com/DEVitor0"> GitHub</a>
        </div>
        <div className="fourth-detail">
          <a href="https://github.com/DEVitor0/devitor-portfolio">
            {' '}
            Ver código{' '}
          </a>{' '}
          <span> • </span>
          <Link to="/artigos"> Meus artigos </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenuDrop;
