import React from 'react'
import "./Home.css"

function Home() {
  return (
    <div className="home">
        <div className='home__top'>
            <h2>My Pantry</h2>
            <h4>Cook with what you have!</h4>
        </div>

        <div className='categoties'>
          <div className='card1'>
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
          

          </div>

          <div className='card2'>
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
          

          </div>
        </div>
    </div>

    
  )
}

export default Home;