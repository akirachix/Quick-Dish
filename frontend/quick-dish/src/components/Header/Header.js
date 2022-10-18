import './Header.css';
import { useRef } from 'react';
import logo from '../../images/logo.png';
import { AiOutlineSearch } from 'react-icons/ai';
import { useGlobalContext } from '../../context/context';

const Header = () => {
  const { setSearchMeal } = useGlobalContext();
  const inputRef = useRef(null);

  const searchMeals = () => {
    setSearchMeal(inputRef.current.value);
  };

  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="logo" />
      <p>Available Recipes</p>

      <div className="header__search">
        <AiOutlineSearch
          className="header__icon"
          onClick={() => {
            inputRef.current.focus();
          }}
        />
        <input
          ref={inputRef}
          className="header__input"
          type="text"
          placeholder="Search for recipes"
          onChange={searchMeals}
        />
      </div>
    </div>
  );
};

export default Header;
