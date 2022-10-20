import './Home.css';
import { useRef, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Recipes from '../../components/Recipes/Recipes';
import Categories from '../../components/Categories/Categories';
import Ingredients from '../../components/Ingredients/Ingredients';

import { useGlobalContext } from '../../context/context';

const Home = () => {
  const { setLoadedMeals } = useGlobalContext();

  const recipesRef = useRef(null);
<<<<<<< HEAD
 
   useEffect(() => {
=======

  useEffect(() => {
>>>>>>> 3398c449b8a120e019d088aae7702584cf269989
    setLoadedMeals(recipesRef);
  }, [setLoadedMeals]);

  return (
    <div className="home">
      <Header />

      <div className="home__container">
        <div className="home__categories">
          <Categories />
<<<<<<< HEAD
          <Recipes />
=======
>>>>>>> 3398c449b8a120e019d088aae7702584cf269989
          <div ref={recipesRef}>
            <Recipes />
          </div>
        </div>

        <div className="home__ingredients"></div>
        <Ingredients />
        </div>
      </div>
  );
};
<<<<<<< HEAD
=======

>>>>>>> 3398c449b8a120e019d088aae7702584cf269989
export default Home;