import './Recipes.css';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { useRef, useEffect } from 'react';
import { useGlobalContext } from '../../context/context';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const Recipes = () => {
  const { recipes, loading, setLoadedMeals, like, unlike, isLiked } = useGlobalContext();  
  
  const recipesRef = useRef(null)

  useEffect(() => {
    setLoadedMeals(recipesRef);
  }, [setLoadedMeals]);

  return (
    <div className="recipes">      
    {recipes?.length > 0 && <h2 className="recipes__title">Suggested Recipes</h2>}      

      {loading ? (
        <Loading/>
      ) : (                
        <div ref={recipesRef} className="sm:grid md:grid-cols-2 lg:grid-cols-3 mt-5">
          {recipes?.map((recipe, index) => {
            const { idMeal, strMeal, strMealThumb } = recipe;
            return (                            
              <div className="recipes__detail" key={idMeal}>
                  <Link to={`/${idMeal}`}>
                  <img src={strMealThumb} alt={strMeal} className='recipes__image' />
              </Link>              

                  <div className="recipes__name">
                    <h4>{strMeal}</h4>
                    <div>
                      {isLiked[`${index}`] ? (
                        <AiFillHeart style={{color: '#DE1A1A'}} onClick={() => unlike(index, idMeal, strMeal, strMealThumb)}/>
                      ) : (
                        <AiOutlineHeart onClick={() => like(index, idMeal, strMeal, strMealThumb )} />
                      )}                                            
                    </div>
                  </div>
                </div>
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
