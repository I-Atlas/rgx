import React from "react";
import { Link } from "react-router-dom";
import { StateContext } from "../context";
import { clearFilters, setSearchValue } from "../store/actions";

export const Header: React.FC = () => {
  const { dispatch, searchValue } = React.useContext(StateContext);

  const handleClickLogo = (): void => {
    if (dispatch) {
      dispatch(clearFilters());
    }
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (dispatch) {
      dispatch(setSearchValue(e.target.value));
    }
  };

  return (
    <>
      <Link to="/">
        <svg
          onClick={handleClickLogo}
          id="logo"
          xmlns="http://www.w3.org/2000/svg"
          width="66"
          height="26"
          viewBox="0 0 66 26"
        >
          <g strokeWidth="1" fill="none">
            <g fill="#383838">
              <path d="M5.6 16L8.9 16 12.1 25 18.1 25 13.8 15C16.4 13.8 17.2 11.5 17.2 8.5 17.2 3.9 15.1 1 8.6 1L0.5 1 0.5 25 5.6 25 5.6 16ZM5.6 5.7L9.1 5.7C11.4 5.7 11.6 7.2 11.6 8.5 11.6 9.8 11.4 11.4 9.1 11.4L5.6 11.4 5.6 5.7ZM29.8 25.4C33.3 25.4 36.1 24.7 37.5 23.8L37.5 11.1 29 11.1 29 15.7 32.4 15.7 32.4 20.6C32.1 20.6 31.4 20.6 30.9 20.6 26.5 20.6 24.9 19 24.9 13 24.9 7.4 26.4 5.4 30.9 5.4 32.9 5.4 35.1 5.8 37 6.7L37 1.7C35.6 1 33.2 0.6 30 0.6 22.7 0.6 19.7 4.6 19.7 13 19.7 21.4 22.7 25.4 29.8 25.4L29.8 25.4ZM53.9 25L59.9 25 53.3 12.5 59.5 1 53.6 1 49.7 9.6 45.8 1 39.9 1 46.1 12.5 39.5 25 45.5 25 49.7 16.4 53.9 25ZM67.2" />
            </g>
          </g>
        </svg>
      </Link>
      <div className="white-block menu-block">
        <ul className="menu-block__items">
          <Link
            to="/tags/email"
            className="menu-block__item menu-block__item--email"
          >
            <li>
              <span>E-mail</span>
            </li>
          </Link>
          <Link
            to="/tags/numbers"
            className="menu-block__item menu-block__item--email"
          >
            <li>
              <span>Numbers</span>
            </li>
          </Link>
          <Link
            to="/tags/strings"
            className="menu-block__item menu-block__item--email"
          >
            <li>
              <span>Strings</span>
            </li>
          </Link>
          <Link
            to="/tags/date"
            className="menu-block__item menu-block__item--email"
          >
            <li>
              <span>Date/Time</span>
            </li>
          </Link>
          <Link
            to="/tags/url"
            className="menu-block__item menu-block__item--email"
          >
            <li>
              <span>Url</span>
            </li>
          </Link>
          <Link
            to="/tags/other"
            className="menu-block__item menu-block__item--email"
          >
            <li>
              <span>Other</span>
            </li>
          </Link>
          <li className="menu-block__item menu-block__item--search">
            <input
              onChange={handleChangeInput}
              id="search-input"
              type="text"
              placeholder={`Search`}
              value={searchValue}
            />
          </li>
        </ul>
      </div>
    </>
  );
};
