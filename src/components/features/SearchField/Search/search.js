import './styles.css';
import '../SearchFilter/search.css';
import React from 'react';
import FilterMenu from '../../FilterMenu/filtermenu';
import All from '../../../all';
import Layout from '../../../layout/layout';

export default function Search() {
  return (
    <Layout>
      <FilterMenu />
      <All />
    </Layout>
  );
}
