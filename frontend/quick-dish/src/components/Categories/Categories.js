import './Categories.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useGlobalContext } from '../../context/context';

const categoriesUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';

const Categories = () => {
  const { searchCategory } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${categoriesUrl}`);
      const data = await response.data;
      setCategories(data.categories);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchRecipes = (category) => {
    searchCategory(category);
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="categories">
      <div className="categories__title">
        <h2>My Pantry</h2>
        <p>Cook with what you have!</p>
      </div>

      <div className="sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5">
        {categories.map((category) => {
          const { idCategory, strCategory, strCategoryThumb } = category;
          return (
            <div
              className="categories__detail"
              key={idCategory}
              onClick={() => fetchRecipes(strCategory)}
            >
              <img src={strCategoryThumb} alt={strCategory} />
              <p>{strCategory}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
