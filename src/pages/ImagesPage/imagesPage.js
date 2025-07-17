/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from 'react';
import { ImagesContent } from '../../data/imagesContent';
import './imagesPage.css';
import Header from '../../components/layout/Header/header';
import Footer from '../../components/layout/Footer/footer';
import FilterMenu from '../../components/features/FilterMenu/filtermenu';

const ImagesPage = ({ results }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Categorias disponíveis
  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'projects', name: 'Projetos' },
    { id: 'articles', name: 'Artigos' },
  ];

  // Filtrar conteúdo baseado na categoria selecionada
  const filteredContent =
    activeCategory === 'all'
      ? ImagesContent
      : ImagesContent.filter((item) =>
          activeCategory === 'projects'
            ? item.href.includes('github.io') ||
              item.href.includes('github.com')
            : item.href.includes('linkedin.com'),
        );

  return (
    <div className="main">
      <Header />
      <FilterMenu />

      {/* Menu de Categorias */}
      <div className="categories-container">
        <div className="categories-menu">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="images-content">
        {filteredContent.map((item, index) => (
          <div className="images--card" key={index}>
            <a
              href={item.href}
              className="images--img-container"
              style={{ backgroundImage: `url(${item.img})` }}
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              href={item.href}
              className="images--text-container"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="images--name">{item.name}</p>
              <p className="images--link">{item.link}</p>
            </a>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ImagesPage;
