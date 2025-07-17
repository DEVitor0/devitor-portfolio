import '../../styles.css';
import '../../components/features/SearchFilter/search.css';
import React, { useEffect } from 'react';
import Logo from '../../components/ui/LogoStyles/logo';
import SearchBox from '../../components/features/SearchField/SearchBox/searchbox';
import BoxMenuDrop from '../../components/features/BoxMenuDrop/boxmenudrop';
import ProfileMenuDrop from '../../components/ui/ProfileMenu/profilemenudrop';
import { useHistory } from 'react-router-dom';
import { Content } from '../../data/content';
import { Link } from 'react-router-dom';

function Home() {
  const history = useHistory();

  const options = [
    {
      name: 'tudo que Vitor já publicou',
      value: 'geral',
    },
    {
      name: 'quem é Vitor Moreira ?',
      value: 'sobre',
    },
    {
      name: 'projetos criados por DEVitor0',
      value: 'projetos',
    },
    {
      name: 'artigos publicados por Vitor Moreira',
      value: 'artigos',
    },
    {
      name: 'galeria de imagens de DEVitor0',
      value: 'imagens',
    },
    {
      name: 'como falar com Vitor ?',
      value: 'contato',
    },
  ];

  // Website search
  const searchWebsite = () => {
    const query = document.querySelector('.search-input').value;
    if (query) {
      history.push(`/geral?q=${encodeURIComponent(query)}`);
    }
  };

  useEffect(() => {
    let inputField = document.querySelector('.search-input');
    //Trigger search when the enter key is pressed
    inputField.addEventListener('keyup', function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        searchWebsite();
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // I'm Feeling Lucky search
  function feelingLucky() {
    let path = document.querySelector('.search-input').value;

    // Route to random page if search input is empty
    if (!path) {
      history.push(
        `/${options[Math.floor(Math.random() * options.length)].value}`,
      );
      return;
    }

    /* Get all elements matching the search term */
    const item = Content.filter((item) => item.category === path);

    // Get the link of the first match
    // Redirect to first match, if it exists
    if (item[0]) {
      const url = item[0].link;
      window.location.href = url;
    } else if (path) {
      history.push(path);
    }
  }

  return (
    <div className="home main">
      <div className="top-menu">
        <span className="top-menu-item no-show-mobile">
          {' '}
          <a href="mailto:devitormoreira@gmail.com"> Email </a>
        </span>
        <span className="top-menu-item no-show-mobile">
          {' '}
          <a href="https://github.com/DEVitor0"> GitHub </a>
        </span>
        <BoxMenuDrop />
        <ProfileMenuDrop />
      </div>
      <div className="flex-center">
        <div className="search-container">
          <div className="frontpage-logo">
            <Logo name="DEVitor" />
          </div>
          <SearchBox options={options} />
          <div className="search-btns">
            <input
              className="search-btn sw"
              type="button"
              value="Pesquisar um Website"
              onClick={searchWebsite}
            />
            <input
              className="search-btn ifl"
              type="button"
              value="Estou com sorte"
              onClick={feelingLucky}
            />
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="country">Brasil</div>
        <div className="footer-links">
          <div className="footer-links-section">
            <Link to="/sobre"> Sobre </Link>
            <Link to="/projetos"> Projetos </Link>
            <Link to="/artigos"> Artigos</Link>
            <a href="mailto:devitormoreira@gmail.com"> Email </a>
          </div>
          <div className="footer-links-section">
            <a href="https://github.com/DEVitor0"> GitHub </a>
            <a href="https://www.linkedin.com/in/c1e0/"> LinkedIn </a>
            <a href="mailto:devitormoreira@gmail.com"> Email </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Home;
