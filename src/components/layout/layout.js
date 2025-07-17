import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header/header';
import Footer from './Footer/footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
