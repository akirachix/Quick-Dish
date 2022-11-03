import './Categories.css';
import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';
import { useGlobalContext } from '../../context/context';

const Categories = () => {
  const { searchCategory, pantry } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  const fetchCategories = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/categories/');
      const data = await response.data;
      setCategories(data.categories);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

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

      <div className="home__bodyInformation1">
        {pantry && pantry.length > 0 ? (
          <>
            {pantry.map((item, index) => (
              <div key={index} className="home__info">
                {/* <div>
                  <img
                    className="img"
                    src="https://thumbs.dreamstime.com/b/heart-shape-various-vegetables-fruits-healthy-food-concept-isolated-white-background-140287808.jpg"
                    alt="quickdish"
                  />
                </div> */}

                <div className="aside__text">
                  <h3 className="veg">{item.itemName}</h3>
                  <h5>You have {item.quantity} left</h5>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div>No ingredients found</div>
        )}
      </div>

      {/* //category */}
      <div className="categories__title">
        <h2>Categories</h2>
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
