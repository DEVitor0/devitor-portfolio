import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import Logo from '../../ui/LogoStyles/logo';
import TopSearchBox from '../../features/TopSearchBox/topSearchbox';
import BoxMenuDrop from '../../features/BoxMenuDrop/boxmenudrop';
import ProfileMenuDrop from '../../ui/ProfileMenu/profilemenudrop';

const Header = () => {
  return (
    <div className="menu">
      <div className="menu-section">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Logo name="DEVitor" />
        </Link>
        <div className="topmenu-menu-search menu-search">
          <TopSearchBox />
        </div>
      </div>
      <div className="menu-section">
        <div className="header-profile-icons">
          <BoxMenuDrop />
          <ProfileMenuDrop />
        </div>
      </div>
    </div>
  );
};

export default Header;
