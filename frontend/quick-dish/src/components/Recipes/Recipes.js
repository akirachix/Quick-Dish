import './Recipes.css';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useGlobalContext } from '../../context/context';

const Recipes = () => {
  const { recipes, loading } = useGlobalContext();

  return (
    <div className="recipes">
      <h2 className="recipes__title">Suggested Recipes</h2>

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="sm:grid md:grid-cols-2 lg:grid-cols-3 mt-5">
          {recipes?.map((recipe) => {
            const { idMeal, strMeal, strMealThumb } = recipe;
            return (
              <Link to={`/${idMeal}`}>
                <div className="recipes__detail" key={idMeal}>
                  <img src={strMealThumb} alt={strMeal} />

                  <div className="recipes__name">
                    <h4>{strMeal}</h4>
                    <div>
                      <AiOutlineHeart />
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {!recipes && !loading && (
        <div className="recipes__error">No recipes found 😭</div>
      )}
    </div>
  );
};

export default Recipes;