import './Meal.css';
import React, {Component} from 'react';
import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import axios from '../axios';
import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

const mealUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

const Meal = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [meal, setMeal] = useState({});

  const fetchMeal = useCallback(async () => {
    setLoading(true);

    try {
      const response = await axios.get(`${mealUrl}${id}`);
      const data = await response.data;
      const { meals } = data;
      if (meals) {
        const {
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
      }, 2000);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchMeal();
  }, [fetchMeal]);

  const { name, image, instructions, area, ingredients } = meal;

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!meal) {
    return <h1>No meal found</h1>;
  }

  return (
    <div className="meal">
      <div className="meal__info">
        <div className="meal__left">
          <img src={image} alt={name} />
          <p>
            {name} ({area})
          </p>

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
          <p>{instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default Meal;
