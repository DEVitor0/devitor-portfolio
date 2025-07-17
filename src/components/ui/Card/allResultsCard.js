import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './allResultsCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const AllResultsCard = ({ results, uniqueGroup }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showToggleButton, setShowToggleButton] = useState({});

  const refs = useRef([]);

  useEffect(() => {
    const newShowButtons = {};
    refs.current.forEach((ref, i) => {
      if (ref) {
        const isOverflowing = ref.scrollHeight > ref.offsetHeight + 5;
        newShowButtons[i] = isOverflowing;
      }
    });
    setShowToggleButton(newShowButtons);
  }, [results]);

  const toggleExpand = (idx) => {
    const el = refs.current[idx];
    if (!el) return;

    const wrapper = el.parentElement;

    if (expandedIndex === idx) {
      // Fechar: animação fluida
      const currentHeight = wrapper.scrollHeight;
      wrapper.style.maxHeight = `${currentHeight}px`;

      requestAnimationFrame(() => {
        wrapper.style.transition = 'max-height 0.4s ease-in-out';
        wrapper.style.maxHeight = '3.2em';
      });

      setTimeout(() => {
        setExpandedIndex(null);
      }, 400);
    } else {
      setExpandedIndex(idx);
    }
  };

  function formatURL(u) {
    try {
      const base = window.location.origin;
      const url = new URL(u, base);
      const domain = url.origin;
      const paths = url.pathname.split('/').filter(Boolean);
      return [domain, paths];
    } catch (err) {
      console.error('URL inválida:', u);
      return ['URL inválida', []];
    }
  }

  return (
    <div className="results-content">
      {results.map((item, index) => (
        <div key={item.link || index} className="result-card">
          <a href={`${item.link}`}>
            <p>
              {formatURL(item.link)[1].map((path, i) => (
                <span key={i}>{` › ${path}`}</span>
              ))}
            </p>
            <h3>{item.name}</h3>
          </a>

          <div
            className={`excerpt-wrapper ${expandedIndex === index ? 'expanded' : ''}`}
            style={
              expandedIndex === index
                ? { maxHeight: refs.current[index]?.scrollHeight + 'px' }
                : { maxHeight: '3.2em' }
            }
          >
            <p className="excerpt" ref={(el) => (refs.current[index] = el)}>
              {item.excerpt}
            </p>
          </div>

          {showToggleButton[index] && (
            <span className="toggle-btn" onClick={() => toggleExpand(index)}>
              {expandedIndex === index ? (
                <>
                  Mostrar menos <FontAwesomeIcon icon={faChevronUp} />
                </>
              ) : (
                <>
                  Mostrar mais <FontAwesomeIcon icon={faChevronDown} />
                </>
              )}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

AllResultsCard.propTypes = {
  results: PropTypes.array.isRequired,
  uniqueGroup: PropTypes.string,
};

export default AllResultsCard;
