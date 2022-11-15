import './Meal.css';
import axios from 'axios';
import logo from '../../images/logo.png';
import { AiOutlineHeart } from 'react-icons/ai';
import Loading from '../../components/Loading/Loading';
import { useState, useEffect, useCallback } from 'react';
import { useGlobalContext } from '../../context/context';
import { useParams, useNavigate } from 'react-router-dom';


const Meal = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [meal, setMeal] = useState({});
  const [loading, setLoading] = useState(false);
  const { viewRecipe, setViewRecipe, setRecipeId, addFavorites } =
    useGlobalContext();

  const fetchMeal = useCallback(async () => {
    setLoading(true);

    try {
      const response = await axios.get(`/api/meal/${id}`);
      const data = await response.data;
      const { meals } = data;
      if (meals) {
        const {
          idMeal,
          strMeal: name,
          strMealThumb: image,
          strInstructions: instructions,
          strArea: area,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
          strIngredient6,
          strIngredient7,
          strIngredient8,
          strIngredient9,
          strIngredient10,
          strIngredient11,
          strIngredient12,
          strIngredient13,
          strIngredient14,
          strIngredient15,
        } = meals[0];

        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
          strIngredient6,
          strIngredient7,
          strIngredient8,
          strIngredient9,
          strIngredient10,
          strIngredient11,
          strIngredient12,
          strIngredient13,
          strIngredient14,
          strIngredient15,
        ];

        const meal = {
          idMeal,
          name,
          image,
          instructions,
          area,
          ingredients,
        };

        setMeal(meal);
      }

      setTimeout(() => {
        setLoading(false);
      }, 800);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchMeal();
  }, [fetchMeal]);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '....' : str;
  }

  const { idMeal, name, image, instructions, area, ingredients } = meal;

  const handleViewRecipe = () => {
    navigate('/meal/:id');
    setRecipeId(id);
    setViewRecipe(true);
  };

  if (loading) {
    return (
      <div className="mt-16">
        <Loading />
      </div>
    );
  }

  if (!meal) {
    return <h1>No meal found</h1>;
  }

  return (
    <div className="meal">
      <div className="header">
        <img className="header__logo" src={logo} alt="logo" />
      </div>

      <div className="meal__info">
        <div className="meal__left">
          <img src={image} alt={name} />
          <p>
            {name} ({area})
          </p>

          <div
            className="meal__button"
            onClick={() => {
              addFavorites(idMeal, name, image);
            }}
          >
            <p>
            <a href='/SignUp'>Save </a> </p>
            <AiOutlineHeart />
          </div>

          <div className="meal__ingredients">
            <h1>Ingredients</h1>
            {ingredients?.map((ingredient, index) => {
              return ingredient ? (
                <li className="meal__ingredient" key={index}>
                  {ingredient}
                </li>
              ) : null;
            })}
          </div>
        </div>

        <div className="meal__right">
          <h1>Directions</h1>
          {viewRecipe ? (
            <p>{instructions}</p>
          ) : (
            <p>{truncate(instructions, 300)} </p>
          )}

          {!viewRecipe && (
            <button onClick={handleViewRecipe}>
              <span>View Full Recipe</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Meal;