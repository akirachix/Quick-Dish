import React from 'react';
import './Home.css';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import FavoriteIcon from '@material-ui/icons/Favorite';

function Home() {
  return (
    <div className="home">
      <div className="home__right">
        <div className="home__top">
          <h2>My Pantry</h2>
          <h4>Cook with what you have!</h4>
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

        <h1 className="suggest">Suggested Recipes</h1>

        <div className="home__bodyInformation3">
          <div className="home__info3">
            <div className='image'>
              <img
                className="img3"
                src="https://img.sndimg.com/food/image/upload/q_92,fl_progressive,w_1200,c_scale/v1/img/recipes/31/02/58/picoYDCyf.jpg"
                alt="sabdio"
              />
            </div>
            <div className="aside__text3">
              <h3>Russian Fried Potatoes</h3>
              <div className="icons">
                <FavoriteBorderOutlinedIcon />
                <MoreVertOutlinedIcon />
              </div>
            </div>
          </div>

          <div className="home__info3">
            <div className="image">
              <img
                className="img3"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUeXJLqoTGbVY-kb0CrANJL2QiCdu852LA5rYwPM33Kg&s"
                alt="sabdio"
              />
            </div>
            <div className="aside__text3">
              <h3>Fried Mashed Potatoes</h3>
              <div className="icons">
                <FavoriteBorderOutlinedIcon />
                <MoreVertOutlinedIcon />
              </div>
            </div>
          </div>

          <div className="home__info3">
            <div className="image">
              <img
                className="img3"
                src="https://www.budgetbytes.com/wp-content/uploads/2022/03/Tomato-Basil-Chicken-side.jpg"
                alt="sabdio"
              />
            </div>
            <div className="aside__text3">
              <h3>Tomato Basil Chicken</h3>
              <div className="icons">
                <FavoriteBorderOutlinedIcon />
                <MoreVertOutlinedIcon />
              </div>
            </div>
          </div>
        </div>

        <div className="home__bodyInformation3">
          <div className="home__info3">
            <div>
              <img
                className="img3"
                src="https://img.sndimg.com/food/image/upload/q_92,fl_progressive,w_1200,c_scale/v1/img/recipes/31/02/58/picoYDCyf.jpg"
                alt="sabdio"
              />
            </div>
            <div className="aside__text3">
              <h3>Russian Fried Potatoes</h3>
              <div className="icons">
                <FavoriteBorderOutlinedIcon />
                <MoreVertOutlinedIcon />
              </div>
            </div>
          </div>

          <div className="home__info3">
            <div className="image">
              <img
                className="img3"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUeXJLqoTGbVY-kb0CrANJL2QiCdu852LA5rYwPM33Kg&s"
                alt="sabdio"
              />
            </div>
            <div className="aside__text3">
              <h3>Fried Mashed Potatoes</h3>
              <div className="icons">
                <FavoriteBorderOutlinedIcon />
                <MoreVertOutlinedIcon />
              </div>
            </div>
          </div>

          <div className="home__info3">
            <div className="image">
              <img
                className="img3"
                src="https://www.budgetbytes.com/wp-content/uploads/2022/03/Tomato-Basil-Chicken-side.jpg"
                alt="sabdio"
              />
            </div>
            <div className="aside__text3">
              <h3>Tomato Basil Chicken</h3>
              <div className="icons">
                <FavoriteBorderOutlinedIcon />
                <MoreVertOutlinedIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home__left">
        <div className="left__top">
          <h4>Select Ingredients</h4>
          <div className="left__icon">
            <PlaylistAddIcon />
            <FavoriteIcon />
            <MoreVertOutlinedIcon />
          </div>
        </div>

        <div className="left__bodyInformation1">
          <div className="container">
            <h3>Pumpkin</h3>
          </div>
          <div className="container">
            <h3>Cabbages</h3>
          </div>
          <div className="container">
            <h3>Garlic</h3>
          </div>
        </div>
        <div className="left__bodyInformation1">
          <div className="container__red">
            <h3>Brocolli</h3>
          </div>
          <div className="container__red">
            <h3>Spinach</h3>
          </div>
          <div className="container">
            <h3>Onion</h3>
          </div>
        </div>
        <div className="left__bodyInformation1">
          <div className="container">
            <h3>Carrot</h3>
          </div>
          <div className="container__red">
            <h3>Potato</h3>
          </div>
          <div className="container">
            <h3>Lettuce</h3>
          </div>
        </div>
        <div className="left__bodyInformation1">
          <div className="container">
            <h3>Okra</h3>
          </div>
          <div className="container">
            <h3>Tomato</h3>
          </div>
          <div className="container__red">
            <h3>EggPlant</h3>
          </div>
        </div>
        <div className="left__bodyInformation1">
          <div className="container">
            <h3>Celery</h3>
          </div>
          <div className="container">
            <h3>Kale</h3>
          </div>
          <div className="container">
            <h3>Cucumber</h3>
          </div>
        </div>
        <div className="left__bodyInformation1">
          <div className="container">
            <h3>Eggs</h3>
          </div>
          <div className="container">
            <h3>Lettuce</h3>
          </div>
          <div className="container">
            <h3>Lettuce</h3>
          </div>
        </div>
        <div className="left__bodyInformation1">
          <div className="container">
            <h3>Okra</h3>
          </div>
          <div className="container">
            <h3>Tomato</h3>
          </div>
          <div className="container">
            <h3>+ 4 more</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
