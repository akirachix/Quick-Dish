import axios from 'axios';
import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [loadedMeals, setLoadedMeals] = useState('');
  const [pantry, setPantry] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [recipeId, setRecipeId] = useState('');
  const [viewRecipe, setViewRecipe] = useState(false);

  // console.log(pantry)

  const executeScroll = () => {
    loadedMeals?.current.scrollIntoView();
  };

  // Filter category recipes
  const searchCategory = async (category) => {
    setLoading(true);
    setIsLiked(false);
    executeScroll();

    try {
      const response = await axios.get(
        `https://arcane-fortress-47060.herokuapp.com/api/category/${category}`
        // `/api/category/${category}`
      );
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
  const searchIngredients = async (Ingredients) => {
    setLoading(true);
    setIsLiked(false);
    executeScroll();

    try {
      const response = await axios.get(
        `https://arcane-fortress-47060.herokuapp.com/api/ingredient/${Ingredients}`
        // `/api/ingredient/${ingredients}`
      );
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
    setIsLiked(false);
    executeScroll();

    try {
      const response = await axios.get(
        `https://arcane-fortress-47060.herokuapp.com/api/search/${searchMeal}`
        // `/api/search/${searchMeal}`
      );
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

  // Add Favorites
  const addFavorites = async (identifier, name, image) => {
    try {
      const response = await axios.post(
        'https://arcane-fortress-47060.herokuapp.com/api/add-favorite/',
        // '/api/add-favorite',
        {
          identifier,
          image,
          name,
        }
      );
      const data = await response.data;
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const like = (index, identifier, name, image) => {
    addFavorites(identifier, name, image);
    setIsLiked((prevState) => ({ ...isLiked, [index]: !prevState[index] }));
  };

  const unlike = (index) => {
    setIsLiked((prevState) => ({ ...isLiked, [index]: !prevState[index] }));
  };

  return (
    <AppContext.Provider
      value={{
        searchCategory,
        searchIngredients,
        searchMeals,
        loading,
        recipes,
        setLoadedMeals,
        executeScroll,
        pantry,
        setPantry,
        addFavorites,
        like,
        unlike,
        isLiked,
        viewRecipe,
        setViewRecipe,
        recipeId,
        setRecipeId,
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