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

  useEffect(() => {
    setLoadedMeals(recipesRef);
  }, [setLoadedMeals]);

  return (
    <div className="home">
      <Header />

      <div className="home__container">
        <div className="home__categories">
          <Categories />
          <div ref={recipesRef}>
            <Recipes />
          </div>
        </div>

        <div className="home__ingredients">
          <Ingredients />
        </div>
      </div>
    </div>
  );
};

export default Home;
