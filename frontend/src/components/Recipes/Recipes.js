import './Recipes.css';
import { Link } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useGlobalContext } from '../../context/context';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const Recipes = () => {
  const { recipes, loading, setLoadedMeals, addFavorites } = useGlobalContext();  
  const [isLiked, setIsLiked]  = useState(false)

  const recipesRef = useRef(null)

  useEffect(() => {
    setLoadedMeals(recipesRef);
  }, [setLoadedMeals]);

  const handleLike = (index, id, name, image) => {    
    addFavorites(id, name, image)    
    setIsLiked(prevState => ({...isLiked, [index]: !prevState[index]}))    
  }

  const handleUnlike = (index, idMeal, strMeal, strMealThumb) => {
    setIsLiked(prevState => ({...isLiked, [index]: !prevState[index]}))    
  }

  return (
    <div className="recipes">      
    {recipes?.length > 0 && <h2 className="recipes__title">Suggested Recipes</h2>}      

      {loading ? (
        <h1>Loading...</h1>
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
                        <AiFillHeart style={{color: '#DE1A1A'}} onClick={() => handleUnlike(index, idMeal, strMeal, strMealThumb)}/>
                      ) : (
                        <AiOutlineHeart onClick={() => handleLike(index, idMeal, strMeal, strMealThumb )} />
                      )}                      
                      <BsThreeDotsVertical />
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
