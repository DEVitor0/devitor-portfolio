import './searchbox.css';
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faTimes,
  faHistory,
} from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from 'react-router-dom';
import MobileSearch from '../MobileSearch/mobileSearch';
import { Content } from '../../../../data/content';

const SearchBox = (props) => {
  // Get url pathname to use as search value
  const urlPathname = window.location.pathname;
  var rx = /[^/](.*)/g;
  var arr = rx.exec(urlPathname);
  let val = '';
  if (arr) {
    val = arr[0];
  }

  const imgStyle = {
    verticalAlign: 'middle',
    marginRight: 10,
    fontSize: '13px',
    color: '#aaa',
  };

  const removeBtnStyle = {
    verticalAlign: 'middle',
    marginRight: 10,
    fontSize: '13px',
    color: '#555',
    border: '0',
    outline: 'none',
    background: 'transparent',
    float: 'right',
    padding: '10px',
    cursor: 'pointer',
  };

  function showOptions() {
    let el = document.querySelector('.search-select');
    el.style.display = 'block';

    // Oculta os botões ao focar
    const btns = document.getElementById('search-buttons');
    if (btns) btns.style.display = 'none';

    if (window.innerWidth < 768) {
      document.querySelector('.mobile-search-box').style.display = 'block';
      document.querySelector('.search-select').style.display = 'none';
      document.querySelector('body').style.height = '100vh';
      document.querySelector('.mobile-search-input').focus();
    }
  }

  function hideOptions() {
    setTimeout(function () {
      let el = document.querySelector('.search-select');
      el.style.display = 'none';

      // Mostra os botões ao desfocar
      const btns = document.getElementById('search-buttons');
      if (btns) btns.style.display = 'block';
    }, 200);
  }

  useEffect(() => {
    const clearBtn = document.querySelector('.clear-icon');
    let input = document.querySelector('.search-input').value;
    // Only show the clear button when the input field is nonempty
    if (input) {
      clearBtn.style.display = 'none';
    } else {
      clearBtn.style.display = 'inline-block';
    }
  }, []);

  /// Remove option upon button click
  function removeOption(i) {
    // i.remove();
    i.style.display = 'none';
  }

  // Clear input field
  function clear() {
    let input = document.querySelector('.search-input');
    input.value = '';
  }

  // Show the clear button when the search input field is nonempty
  const clearValue = () => {
    let closeIcon = document.querySelector('.clear-icon');
    let searchValue = document.querySelector('.search-input').value;
    if (searchValue) {
      closeIcon.style.display = 'inline-block';
      // When the search input is not empty, give it a subtle box shadow
      document.querySelector('.search').style.boxShadow =
        `1px 1px 6px rgba(0,0,0,0.2)`;
    } else {
      closeIcon.style.display = 'none';
      document.querySelector('.search').style.boxShadow = `none`;
    }
  };

  useEffect(() => {
    // Trigger search when enter key is pressed
    let inputField = document.querySelector('.search-input');
    inputField.addEventListener('keyup', function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        searchWebsite();
      }
    });

    // As soon as the page loads, show the clear button if the search input field is nonempty
    let closeIcon = document.querySelector('.clear-icon');
    let searchValue = document.querySelector('.search-input').value;
    if (searchValue) {
      closeIcon.style.display = 'inline-block';
      document.querySelector('.search').style.boxShadow =
        `1px 1px 6px rgba(0,0,0,0.2)`;
    } else {
      closeIcon.style.display = 'none';
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // "Search" Website, which works by pushing the search term to the url and redirecting to it
  const history = useHistory();
  const searchWebsite = () => {
    const query = document.querySelector('.search-input').value;
    if (query) {
      history.push(`/geral?q=${encodeURIComponent(query)}`);
    }
  };

  // I'm Feeling Lucky search
  function feelingLucky() {
    let path = document.querySelector('.search-input').value;

    // Route to random page if search input is empty
    if (!path) {
      history.push(
        `/${props.options[Math.floor(Math.random() * props.options.length)].value}`,
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
    <div>
      <div>
        <MobileSearch />
      </div>
      <div className="search-box">
        <div className="search-cont">
          <FontAwesomeIcon className="fa fa-search" icon={faSearch} />

          <div className="search">
            <div className="search-value">
              <input
                placeholder=" "
                autoComplete="on"
                className="search-input"
                defaultValue={val}
                onFocus={showOptions}
                onBlur={hideOptions}
                onChange={clearValue}
              />
            </div>
            <div className="search-select">
              <div className="search-options">
                {props.options.map((option) => (
                  <div
                    key={option.value}
                    className="search-option"
                    type="button"
                  >
                    <span>
                      <FontAwesomeIcon
                        className="fas"
                        icon={faHistory}
                        style={imgStyle}
                      />
                      <Link to={`/${option.value}`}>{option.name}</Link>
                      <span>
                        <button
                          className="remove-btn"
                          style={removeBtnStyle}
                          onClick={(e) =>
                            removeOption(
                              e.currentTarget.parentElement.parentElement
                                .parentElement,
                            )
                          }
                        >
                          Remove
                        </button>
                      </span>
                    </span>
                  </div>
                ))}
              </div>
              {
                <div
                  id="search-buttons"
                  className="search-btns"
                  style={{ paddingTop: '20px', paddingBottom: '30px' }}
                >
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
              }
            </div>
          </div>
          <FontAwesomeIcon
            className="fa fa-times clear-icon"
            icon={faTimes}
            title="Clear"
            onClick={clear}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
