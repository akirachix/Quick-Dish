import axios from 'axios';
import './Ingredients.css';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';
import Loading from '../Loading/Loading';
import { useState, useEffect } from 'react';
import { MdPlaylistAdd } from 'react-icons/md';
import { useGlobalContext } from '../../context/context';
import AddIngredients from '../AddIngredients/AddIngredients';

const Ingredients = () => {
  const { searchIngredient } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [open, setOpen] = useState(false);

  const refreshPage = () => {
    window.location.reload(false);
  }

  const fetchIngredients = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/ingredients/');
      const data = await response.data;
      const { meals } = data;
      setIngredients(meals);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIngredients();
  }, []);

  if (loading) {
    return (
      <div className="mt-16">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <ReactTooltip />
      <div className="ingredients">
        <div className="ingredients__header">
          <div className="ingredients__title">
            <p>Select Ingredients</p>
          </div>

          <div className="ingredients__icons">
            <MdPlaylistAdd
              className="cursor-pointer"                          
              onClick={() => setOpen(true)}
              data-tip='Add Pantry'
            />

            <Link to="/favorites" data-tip='Favorites'>
              <FaHeart />              
            </Link>            
          </div>
        </div>

        <div className="sm:grid lg:grid-cols-2 xl:grid-cols-3 mt-5">
          {ingredients.map((ingredient) => {
            const { idIngredient, strIngredient } = ingredient;

            return (
              <div
                className="ingredients__detail whitespace-nowrap"
                key={idIngredient}
                onClick={() => searchIngredient(strIngredient)}
                data-tip={strIngredient}
              >
                <p className="truncate">
                  {strIngredient}{' '}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <AddIngredients open={open} setOpen={setOpen} refreshPage={refreshPage}/>
    </>
  );
};

export default Ingredients;
