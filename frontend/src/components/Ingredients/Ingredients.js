import axios from 'axios';
import './Ingredients.css';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';
import Loading from '../Loading/Loading';
import { MdPlaylistAdd } from 'react-icons/md';
import { useState, useEffect, useRef } from 'react';
import { useGlobalContext } from '../../context/context';
import AddIngredients from '../AddIngredients/AddIngredients';

const Ingredients = () => {
  const { searchIngredients } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [open, setOpen] = useState(false);
  const ingredientRef = useRef(null);

  const refreshPage = () => {
    window.location.reload(false);
  };

  const fetchIngredients = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        'https://arcane-fortress-47060.herokuapp.com/api/ingredients/'
      );
      const data = await response.data;
      const { meals } = data;
      setIngredients(meals);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIngredients();
  }, []);

  let ingredientsArray = [];

  const selectMutipleIngredients = (ingredient) => {
    if (!ingredientsArray.includes(ingredient)) {
      ingredientsArray.push(ingredient);
      console.log(ingredientsArray);
    } else {
      let removeIngredient = ingredientsArray.indexOf(ingredient);
      ingredientsArray = ingredientsArray.filter(
        (item) => item !== ingredientsArray[removeIngredient]
      );
      console.log(ingredientsArray);
    }
  };

  const Ingredient = ({ ingredient }) => {
    const [isActive, setIsActive] = useState(false);
    return (
      <div
        ref={ingredientRef}
        className={`ingredients__detail ${isActive ? 'selected' : ''}`}
        data-tip={ingredient}
        onClick={() => {
          selectMutipleIngredients(ingredient);
          setIsActive(!isActive);
        }}
      >
        <p className="truncate">{ingredient}</p>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="mt-16">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <ReactTooltip />
      <div className="ingredients">
        {/* <div className='fixed w-[28%] top-[200px] px-3 pt-[10px] bg-white pb-10'> */}
        <div className="ingredients__header">
          <div className="ingredients__title">
            <p>Select Ingredients</p>
          </div>

          <div className="ingredients__icons">
            <MdPlaylistAdd
              className="cursor-pointer"
              onClick={() => setOpen(true)}
              data-tip="Add Pantry"
            />

            <Link to="/favorites" data-tip="Favorites">
              <FaHeart />
            </Link>
          </div>
        </div>

        <div className="ingredients__button">
          <button
            onClick={() => searchIngredients(ingredientsArray.toString())}
          >
            Get recipe
          </button>
        </div>
        {/* </div> */}

        <div className="sm:grid md:grid-cols-2 xl:grid-cols-3 mt-10">
          {ingredients.map((ingredient) => {
            const { idIngredient, strIngredient } = ingredient;

            return <Ingredient key={idIngredient} ingredient={strIngredient} />;
          })}
        </div>
      </div>

      <AddIngredients open={open} setOpen={setOpen} refreshPage={refreshPage} />
    </>
  );
};

export default Ingredients;
