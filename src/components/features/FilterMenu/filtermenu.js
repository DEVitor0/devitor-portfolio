import './filtermenu.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faImage,
  faNewspaper,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const FilterMenu = () => {
  return (
    <div className="filter-menu">
      <div className="filter-menu-items">
        <NavLink
          className="filter-menu-item"
          to="/geral"
          activeClassName="item-active"
        >
          <FontAwesomeIcon className="icon" icon={faSearch} />
          <span> Pesquisa </span>
        </NavLink>
        <NavLink
          to="/projetos"
          activeClassName="item-active"
          className="filter-menu-item fmi"
        >
          <FontAwesomeIcon className="icon" icon={faBriefcase} />
          <span> Projetos </span>
        </NavLink>
        <NavLink
          className="filter-menu-item fmi"
          to="/imagens"
          activeClassName="item-active"
        >
          <FontAwesomeIcon className="icon" icon={faImage} />
          <span> Imagens </span>
        </NavLink>
        <NavLink
          className="filter-menu-item fmi"
          to="/artigos"
          activeClassName="item-active"
        >
          <FontAwesomeIcon className="icon" icon={faNewspaper} />
          <span> Artigos </span>
        </NavLink>
        {/* <NavLink
          className="filter-menu-item"
          exact
          to="/maps"
          activeClassName="item-active"
        >
          <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />
          <span> Maps </span>
        </NavLink> */}
      </div>
    </div>
  );
};

export default FilterMenu;
