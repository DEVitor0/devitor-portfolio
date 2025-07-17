import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import { Content } from '../data/content';
import AccordionComponent from '../components/ui/Accordion/accordion';
import AllResultsCard from './ui/Card/allResultsCard';
import Logo from './ui/LogoStyles/logo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import './all.css';

import { findRelatedName } from './features/SearchField/Search/searchUtils';
import useRenderTime from './features/GetTimeToRender/GetTimeToRender';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const RESULTS_PER_PAGE = 10;

const All = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const renderTime = useRenderTime();
  const query = useQuery();
  const searchTerm = query.get('q')?.toLowerCase() || '';

  const relatedName = findRelatedName(searchTerm);

  let filtered = [];
  if (relatedName) {
    filtered = Content.filter((item) => item.name === relatedName);
  } else {
    filtered = Content.filter((item) =>
      `${item.name} ${item.excerpt} ${item.category}`
        .toLowerCase()
        .includes(searchTerm),
    );
  }

  if (filtered.length === 0) {
    return <Redirect to="/nao encontrado :(" />;
  }

  // Paginação
  const totalPages = Math.ceil(filtered.length / RESULTS_PER_PAGE);

  const startIndex = (currentPage - 1) * RESULTS_PER_PAGE;
  const paginatedResults = filtered.slice(
    startIndex,
    startIndex + RESULTS_PER_PAGE,
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="all-results-container">
      <p className="result-count">
        {filtered.length} resultados encontrados em (
        {renderTime ? `${renderTime}s` : '...'})
      </p>

      <AllResultsCard results={paginatedResults.slice(0, 1)} />
      {currentPage === 1 && <AccordionComponent />}
      <AllResultsCard results={paginatedResults.slice(1)} />

      <div className="pagination-container">
        <div className="logo-navigation">
          <FontAwesomeIcon
            icon={faChevronLeft}
            className={`arrow left-arrow ${currentPage === 1 ? 'disabled' : ''}`}
            onClick={() => handlePageChange(currentPage - 1)}
          />
          <div className="custom-logo-container">
            <Logo name={`D${'E'.repeat(currentPage)}Vitor`} />
          </div>
          <FontAwesomeIcon
            icon={faChevronRight}
            className={`arrow right-arrow ${currentPage === totalPages ? 'disabled' : ''}`}
            onClick={() => handlePageChange(currentPage + 1)}
          />
        </div>

        <div className="pagination-nav">
          {Array.from({ length: totalPages }, (_, i) => (
            <span
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`page-number ${i + 1 === currentPage ? 'active' : ''}`}
            >
              {i + 1}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default All;
