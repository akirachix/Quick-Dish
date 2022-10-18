import './Categories.css';
import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';
import { useGlobalContext } from '../../context/context';

const categoriesUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';

const Categories = () => {
  const { searchCategory, executeScroll } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  const fetchCategories = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${categoriesUrl}`);
      const data = await response.data;
      setCategories(data.categories);
      executeScroll();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [executeScroll]);

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
           <div className="home__info">
             <div>
               <img
                className="img"
                src="https://thumbs.dreamstime.com/b/heart-shape-various-vegetables-fruits-healthy-food-concept-isolated-white-background-140287808.jpg"
                alt="sabdio"
              />
            </div>
          
          
            <div className="aside__text">
              <h3 className="veg">Vegetables</h3>
              <h5>You have 2 left</h5>
            </div>
            </div>
          <div className="home__info">
            <div className="image">
              <img
                className="img"
                src="https://image.shutterstock.com/image-photo/fresh-raw-beef-steak-isolated-260nw-344681603.jpg"
                alt="sabdio"
              />
            </div>
            <div className="aside__text">
              <h3>Meat</h3>
              <h5>You have 2kg beef left</h5>
            </div>
            </div>
            <div className="home__info">
            <div className="image">
              <img
                className="img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjRi1EQEPxxKko8ma78er__KaO9mT0NaIO6J6BL9BB&s"
                alt="sabdio"
              />
            </div>
            <div className="aside__text">
              <h3>Fish</h3>
              <h5>You have 2 left</h5>
            </div>
            </div>
            <div className="home__info">
            <div className="image">
              <img
                className="img"
                src="https://c.ndtvimg.com/2019-05/j82aj5m_vegan-baking_650x400_20_May_19.jpg"
                alt="sabdio"
              />
            </div>
            <div className="aside__text">
              <h3>Baking</h3>
              <h5>You have 3kg left</h5>
            </div>
            </div>
            </div>
            <div className="home__bodyInformation2">
          <div className="home__info">
            <div>
              <img
                className="img"
                src="https://media.gettyimages.com/photos/spaghetti-bolognese-picture-id1183748291?s=612x612"
                alt="sabdio"
              />
            </div>
            <div className="aside__text">
              <h3>Pasta</h3>
              <h5>You have 0 left</h5>
            </div>
          </div>
         
          <div className="home__info">
            <div className="image">
              <img
                className="img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSak_54MVMy65nV3UwFTJplokuQXwav1MGLX0Bq2ovG&s"
                alt="sabdio"
              />
            </div>
            <div className="aside__text">
              <h3>Grains&Cereals</h3>
              <h5>You have 5 left</h5>
            </div>
          </div>
          <div className="home__info">
            <div className="image">
              <img
                className="img"
                src="https://media.istockphoto.com/photos/one-liter-of-fresh-milk-and-two-eggs-picture-id110898455?k=20&m=110898455&s=612x612&w=0&h=qvbNobM6MYR4SCekVeCiwGubM___imTPe_zTyHSR0SE="
                alt="sabdio"
              />
            </div>
            <div className="aside__text">
              <h3>Dairy/Eggs</h3>
              <h5>You have 6 left</h5>
            </div>
          </div>
          <div className="home__info">
            <div className="image">
              <img
                className="img"
                src="https://www.nutritionadvance.com/wp-content/uploads/2018/10/25-cooking-fats-and-oils.jpg"
                alt="sabdio"
              />
            </div>
            <div className="aside__text">
              <h3>Oils&Fats</h3>
              <h5>You have 250g left</h5>
            </div>
            </div>
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
