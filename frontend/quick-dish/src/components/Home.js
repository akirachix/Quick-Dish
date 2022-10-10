import React from 'react'
import "./Home.css"
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';

function Home() {
  return (
    <div className="home">
        <div className='home__top'>
            <h2>My Pantry</h2>
            <h4>Cook with what you have!</h4>
        </div>
          {/* categoties */}
        <div className="home__bodyInformation1">
           <div className='home__info'>
             <div>
               <img className='img' src='https://thumbs.dreamstime.com/b/heart-shape-various-vegetables-fruits-healthy-food-concept-isolated-white-background-140287808.jpg'/>
             </div>
             <div className='aside__text'>
               <h3 className='veg'>Vegetables</h3>
               <h5>You have 2 left</h5>
             </div>
           </div>

           <div className='home__info'>
             <div className='image'>
               <img className='img' src='https://image.shutterstock.com/image-photo/fresh-raw-beef-steak-isolated-260nw-344681603.jpg' 
               alt='sabdio'/>
             </div>
             <div className='aside__text'>
               <h3>Meat</h3>
               <h5>You have 2kg beef left</h5>
             </div>
           </div>

           <div className='home__info'>
             <div className='image'>
               <img className='img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjRi1EQEPxxKko8ma78er__KaO9mT0NaIO6J6BL9BB&s' 
               alt='sabdio'/>
             </div>
             <div className='aside__text'>
               <h3>Fish</h3>
               <h5>You have 2 left</h5>
             </div>
           </div>

           <div className='home__info'>
             <div className='image'>
               <img className='img' src='https://c.ndtvimg.com/2019-05/j82aj5m_vegan-baking_650x400_20_May_19.jpg' 
               alt='sabdio'/>
             </div>
             <div className='aside__text'>
               <h3>Baking</h3>
               <h5>You have 3kg left</h5>
             </div>
           </div>

           </div>

        {/* <div className='categoties'>
          <div className='card1'>
            <div className='image'>
              <img src=''></img>

            </div>
            <div className='vege'>
            <h3> <span>Vegetables</span></h3>
            <p>You have 2 left</p>
            </div>
            <div className='meat'>
            <h3>Meat</h3>
            <p>You have 2kg left</p>
            </div>
            
            <div className='fish'>
            <h3>Fish</h3>
            <p>You have 3 left</p>
            </div>

            <div className='baking'>
            <h3>Baking</h3>
            <p>You have 3kg left</p>
            </div>
          

          </div> */}

          {/* <div className='card2'>
            <div className='vege'>
            <h3> <span>Pasta</span></h3>
            <p>You have 0kg left</p>
            </div>
            <div className='meat'>
            <h3>Grains & Cereals</h3>
            <p>You have 2kg left</p>
            </div>
            
            <div className='fish'>
            <h3>Dairy/eggs</h3>
            <p>You have 6 left</p>
            </div>

            <div className='baking'>
            <h3>Oil & fat</h3>
            <p>You have 3kg left</p>
            </div>
          </div> */}

          <div className='home__bodyInformation2'>
           <div className='home__info'>
             <div>
               <img className='img' src='https://media.gettyimages.com/photos/spaghetti-bolognese-picture-id1183748291?s=612x612' />
             </div>
             <div className='aside__text'>
               <h3>Pasta</h3>
               <h5>You have 0 left</h5>
             </div>
           </div>

           <div className='home__info'>
             <div className='image'>
               <img className='img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSak_54MVMy65nV3UwFTJplokuQXwav1MGLX0Bq2ovG&s'/>
             </div>
             <div className='aside__text'>
               <h3>Grains&Cereals</h3>
               <h5>You have 5 left</h5>
             </div>
           </div>

           <div className='home__info'>
             <div className='image'>
               <img className='img' src='https://media.istockphoto.com/photos/one-liter-of-fresh-milk-and-two-eggs-picture-id110898455?k=20&m=110898455&s=612x612&w=0&h=qvbNobM6MYR4SCekVeCiwGubM___imTPe_zTyHSR0SE='/>
             </div>
             <div className='aside__text'>
               <h3>Dairy/Eggs</h3>
               <h5>You have 6 left</h5>
             </div>
           </div>

           <div className='home__info'>
             <div className='image'>
               <img className='img' src='https://www.nutritionadvance.com/wp-content/uploads/2018/10/25-cooking-fats-and-oils.jpg'/>
             </div>
             <div className='aside__text'>
               <h3>Oils&Fats</h3>
               <h5>You have 250g left</h5>
             </div>
           </div>
           </div>

           {/* Suggested recipes */}
            
            <h1 className='suggest'>Suggested Recipes</h1>

            <div className='home__bodyInformation3'>
           <div className='home__info3'>
             <div>
               <img className='img3' src='https://img.sndimg.com/food/image/upload/q_92,fl_progressive,w_1200,c_scale/v1/img/recipes/31/02/58/picoYDCyf.jpg'/>
             </div>
             <div className='aside__text3'>
               <h3>Russian Fried Potatoes</h3>
               <div className="icons">
               {/* <FavoriteBorderOutlinedIcon /> */}
               {/* <MoreVertOutlinedIcon /> */}
               </div>
             </div>
           </div>

           <div className='home__info3'>
             <div className='image'>
               <img className='img3' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUeXJLqoTGbVY-kb0CrANJL2QiCdu852LA5rYwPM33Kg&s'/>
             </div>
             <div className='aside__text3'>
               <h3>Fried Mashed Potatoes</h3>
               <div className="icons">
               {/* <FavoriteBorderOutlinedIcon />
               <MoreVertOutlinedIcon /> */}
               </div>
             </div>
           </div>

           <div className='home__info3'>
             <div className='image'>
               <img className='img3' src='https://www.budgetbytes.com/wp-content/uploads/2022/03/Tomato-Basil-Chicken-side.jpg'/>
             </div>
             <div className='aside__text3'>
               <h3>Tomato Basil Chicken</h3>
               <div className="icons">
               {/* <FavoriteBorderOutlinedIcon />
               <MoreVertOutlinedIcon /> */}
               </div>
             </div>
           </div>

           </div>

           <div className='home__bodyInformation3'>
           <div className='home__info3'>
             <div>
               <img className='img3' src='https://img.sndimg.com/food/image/upload/q_92,fl_progressive,w_1200,c_scale/v1/img/recipes/31/02/58/picoYDCyf.jpg'/>
             </div>
             <div className='aside__text3'>
               <h3>Russian Fried Potatoes</h3>
               <div className="icons">
               {/* <FavoriteBorderOutlinedIcon />
               <MoreVertOutlinedIcon /> */}
               </div>
             </div>
           </div>

           <div className='home__info3'>
             <div className='image'>
               <img className='img3' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUeXJLqoTGbVY-kb0CrANJL2QiCdu852LA5rYwPM33Kg&s'/>
             </div>
             <div className='aside__text3'>
               <h3>Fried Mashed Potatoes</h3>
               <div className="icons">
               {/* <FavoriteBorderOutlinedIcon />
               <MoreVertOutlinedIcon /> */}
               </div>
             </div>
           </div>

           <div className='home__info3'>
             <div className='image'>
               <img className='img3' src='https://www.budgetbytes.com/wp-content/uploads/2022/03/Tomato-Basil-Chicken-side.jpg' 
               alt='quick dish'/>
             </div>
             <div className='aside__text3'>
               <h3>Tomato Basil Chicken</h3>
               <div className="icons">
               {/* <FavoriteBorderOutlinedIcon />
               <MoreVertOutlinedIcon /> */}
               </div>
             </div>
           </div>

           </div>

        {/* </div> */}

        <div className='home__left'>
          <h3>Select Ingredients</h3>
          <h4>djwdhfihfefifiefifidjknfdndkn</h4>
        </div>
    </div>
  )
}
export default Home;