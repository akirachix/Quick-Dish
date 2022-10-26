
import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

const AppContext = createContext();

const categoryUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
const ingredientUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";
const searchUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [searchMeal, setSearchMeal] = useState("");
  const [loadedMeals, setLoadedMeals] = useState("");

  //== a state containing an array of pantry objects
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
      setTimeout(() => {
        setLoading(false);
      }, 200);
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
      setTimeout(() => {
        setLoading(false);
      }, 200);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  // Search meals
  const fetchMeals = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${searchUrl}${searchMeal}`);
      const data = await response.data;
      const { meals } = data;
      setRecipes(meals);
      setTimeout(() => {
        setLoading(false);
      }, 200);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchMeal]);
  useEffect(() => {
    fetchMeals(searchMeal);
  }, [fetchMeals, searchMeal]);
  return (
    <AppContext.Provider
      value={{
        searchCategory,
        searchIngredient,
        loading,
        recipes,
        setSearchMeal,
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