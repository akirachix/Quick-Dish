import axios from 'axios';
import './Ingredients.css';
import { FaHeart } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { MdPlaylistAdd } from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useGlobalContext } from '../../context/context';

const ingredientsUrl =
  'https://www.themealdb.com/api/json/v1/1/list.php?i=list';

const Ingredients = () => {
  const { searchIngredient } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const [ingredients, setIngredients] = useState([]);

  const fetchIngredients = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${ingredientsUrl}`);
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

  const fetchRecipes = (ingredient) => {
    searchIngredient(ingredient);
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="ingredients">
      <div className="ingredients__header">
        <div className="ingredients__title">
          <p>Select Ingredients</p>
        </div>

        <div className="ingredients__icons">
          <MdPlaylistAdd />
          <FaHeart />
          <BsThreeDotsVertical />
        </div>
      </div>

      <div className="sm:grid lg:grid-cols-2 xl:grid-cols-3 mt-5">
        {ingredients.map((ingredient) => {
          const { idIngredient, strIngredient } = ingredient;
          return (
            <div
              className="ingredients__detail whitespace-nowrap"
              key={idIngredient}
              onClick={() => fetchRecipes(strIngredient)}
            >
              <p className="truncate">{strIngredient}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ingredients;
