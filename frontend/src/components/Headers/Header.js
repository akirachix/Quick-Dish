import React, { useRef } from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
  const searchRef = useRef(null);

  const handleSearch = () => {
    searchRef.current.focus();
  };

  return (
    <div className="header">
      <div className="header__text">
        <h2>Quick Dish</h2>
        <h4>Available Recipes</h4>
      </div>

      <div className="header__search">
        <SearchIcon className="header__searchIcon" onClick={handleSearch} />
        <input
          ref={searchRef}
          className="header__searchInput"
          type="text"
          placeholder="Search for recipes"
        ></input>
      </div>
    </div>
  );
}

export default Header;
