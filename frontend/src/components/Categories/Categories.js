import './Categories.css';
import axios from 'axios';
import Loading from '../Loading/Loading';
import { MdDelete } from 'react-icons/md';
import { useState, useEffect, useCallback } from 'react';
import { useGlobalContext } from '../../context/context';

const Categories = () => {
  const { searchCategory } = useGlobalContext();
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [pantry, setPantry] = useState([]);

  const refreshPage = () => {
    window.location.reload(false);
  };

  const fetchPantry = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        'https://arcane-fortress-47060.herokuapp.com/api/pantry/'
      );
      const data = await response.data;
      setPantry(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const deletePantry = async (id) => {
    setLoading(true);
    try {
      const response = await axios.delete(
        `https://arcane-fortress-47060.herokuapp.com/api/pantry/${id}`
      );
      await response.data;
      setLoading(false);
      refreshPage();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        'https://arcane-fortress-47060.herokuapp.com/api/categories/'
      );
      const data = await response.data;
      console.log(data);
      setCategories(data.categories);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
    fetchPantry();
  }, [fetchCategories, fetchPantry]);

  const fetchRecipes = (category) => {
    searchCategory(category);
  };

  if (loading) {
    return (
      <div className="mt-16">
        <Loading />
      </div>
    );
  }

  return (
    <div className="categories">
      <div className="categories__title">
        <h2>My Pantry</h2>
        <p>Cook with what you have!</p>
      </div>

      {pantry && pantry.length > 0 ? (
        <div className="sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {pantry.map(
            (item) =>
              item.quantity > 0 && (
                <div key={item.id} className="pantry__item">
                  <div className="pantry__text">
                    <h3>{item.name}</h3>
                    <h5>You have {item.quantity} left</h5>
                  </div>

                  <div
                    className="pantry__delete"
                    onClick={() => deletePantry(item.id)}
                  >
                    <MdDelete fontSize={25} color="#920809" />
                  </div>
                </div>
              )
          )}
        </div>
      ) : (
        <div>Pantry is empty at the moment!</div>
      )}

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
