import axios from 'axios';
import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const categoryUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
const ingredientUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
const searchUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [loadedMeals, setLoadedMeals] = useState('');
  const [pantry, setPantry] = useState([]);

  const executeScroll = () => {
    loadedMeals.current.scrollIntoView();    
  };

  // Filter category recipes
  const searchCategory = async (category) => {
    setLoading(true);

    try {
      const response = await axios.get(`${categoryUrl}${category}`);
      const data = await response.data;
      const { meals } = data;
      setRecipes(meals);
      setLoading(false);
      setTimeout(() => {
        executeScroll();
      }, 1000);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Filter ingredient recipes
  const searchIngredient = async (ingredient) => {
    setLoading(true);

    try {
      const response = await axios.get(`${ingredientUrl}${ingredient}`);
      const data = await response.data;
      const { meals } = data;
      setRecipes(meals);
      setLoading(false);
      setTimeout(() => {
        executeScroll();
      }, 1000);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Search meals
  const searchMeals = async (searchMeal) => {
    setLoading(true);

    try {
      const response = await axios.get(`${searchUrl}${searchMeal}`);
      const data = await response.data;
      const { meals } = data;
      setRecipes(meals);
      setLoading(false);
      setTimeout(() => {
        executeScroll();
      }, 1000);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        searchCategory,
        searchIngredient,
        searchMeals,
        loading,
        recipes,
        setLoadedMeals,
        executeScroll,
        pantry,
        setPantry,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
