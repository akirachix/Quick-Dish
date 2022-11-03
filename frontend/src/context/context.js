import axios from 'axios';
import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [loadedMeals, setLoadedMeals] = useState('');
  const [pantry, setPantry] = useState([]);
  const [isLiked, setIsLiked] = useState(false)

  const executeScroll = () => {
    loadedMeals?.current.scrollIntoView();    
  };  

  // Filter category recipes
  const searchCategory = async (category) => {    
    setLoading(true);
    setIsLiked(false)
    executeScroll();

    try {
      const response = await axios.get(`/api/category/${category}`);
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
    setIsLiked(false)
    executeScroll();

    try {
      const response = await axios.get(`/api/ingredient/${ingredient}`);
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
    setIsLiked(false)
    executeScroll();

    try {
      const response = await axios.get(`/api/search/${searchMeal}`);
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
      const response = await axios.post('/api/add-favorite/', {identifier, image, name})
      const data = await response.data
      console.log(data)      
      return data      
    } catch (error) {
      console.log(error)      
    }
  }

  const like = (index, identifier, name, image) => {
    addFavorites(identifier, name, image)
    setIsLiked(prevState => ({...isLiked, [index]: !prevState[index]}))   
  }

  const unlike = (index) => {
    setIsLiked(prevState => ({...isLiked, [index]: !prevState[index]}))   
  }

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
        like,
        unlike,
        isLiked
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
