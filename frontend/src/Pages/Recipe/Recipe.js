import './Recipe.css';
import axios from 'axios';
import logo from '../../images/logo.png';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import Loading from '../../components/Loading/Loading';
import { useState, useEffect, useCallback } from 'react';
import { useGlobalContext } from '../../context/context';

const Recipe = () => {
  const { recipes } = useGlobalContext();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [meal, setMeal] = useState({});

  const fetchMeal = useCallback(async () => {
    setLoading(true);
   try {
     const response = await axios.get(
       `https://arcane-fortress-47060.herokuapp.com/api/meal/${id}`
     );
     const data = await response.data;
     const { meals } = data;
     setMeal(meals[0]);
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

  if (loading) {
    return (
      <div className="mt-16">
        <Loading />
      </div>
    );
  }

  return (
    <div className="recipe">
      <div className="recipe__header">
        <img className="recipe__logo" src={logo} alt="logo" />
      </div>

      <div className="recipe__main">
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <div>
          <h1>{meal.strMeal}</h1>
          <Link to={`/meal/${meal.idMeal}`}>
            <button className="recipe__button">Make meal</button>
          </Link>
        </div>
      </div>
    
        <h2 className="font-semibold mt-5 ml-5 text-xl">You might also like</h2>

        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mt-5">
            {recipes?.map((recipe) => {
              const { idMeal, strMeal, strMealThumb } = recipe;
              return (
                <div className='m-5' key={idMeal}>
                <Link key={idMeal} to={`/${idMeal}`}>
                  <div className="recipe__detail" key={idMeal}>
                    <img
                      className="recipe__image"
                      src={strMealThumb}
                      alt={strMeal}
                    />
                    <div className="recipe__name">
                      <h4 className="truncate">{strMeal}</h4>
                      <div>
                        <AiOutlineHeart />
                        <BsThreeDotsVertical />
                      </div>
                    </div>
                  </div>
                </Link>
                </div>
              );
            })}
          </div>
        )}      
    </div>
  );
};
export default Recipe;
