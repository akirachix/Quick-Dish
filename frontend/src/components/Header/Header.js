import './Header.css';
import logo from '../../images/logo.png';
import { useRef, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useGlobalContext } from '../../context/context';

const Header = () => {
  const { searchMeals } = useGlobalContext();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchMeals(inputRef.current.value);
  };

  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="logo" />
      <p>Available Recipes</p>

      <form className="header__search" onSubmit={handleSubmit}>
        <AiOutlineSearch className="header__icon" />
        <input
          ref={inputRef}
          className="header__input"
          type="text"
          placeholder="Search for recipes"
        />

        <button className="header__button" type="submit">
          Search
        </button>

        <button className='header__button-mobile'>
          <AiOutlineSearch className="header__icon-mobile" />
        </button>
      </form>
    </div>
  );
};

export default Header;
