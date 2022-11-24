import './Home.css';
import Header from '../../components/Header/Header';
import Recipes from '../../components/Recipes/Recipes';
import Categories from '../../components/Categories/Categories';
import Ingredients from '../../components/Ingredients/Ingredients';

const Home = () => {
  return (
    <div className="home">
      <Header />

      <div className="home__container">
        <div className="home__categories">
          <div>
            <Categories />
          </div>

          <div className='home__recipes'>
            <Recipes />
          </div>
        </div>

        <div className="home__ingredients">
          <Ingredients />
        </div>

        <div className='home__recipes-mobile'>
          <Recipes/>
        </div>
      </div>
    </div>
  );
};

export default Home;
