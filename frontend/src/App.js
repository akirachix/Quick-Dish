import './App.css';
import Home from './Pages/Home/Home';
import Meal from './Pages/Meal/Meal';
import Favorites from './Pages/Favorites/Favorites';
import SignUp from './Pages/SignUp/SignUp';
import SignIn from './Pages/SignIn/SignIn';
import { Routes, Route } from 'react-router-dom';
import Recipe from './Pages/Recipe/Recipe';

const App = () => {
  return (
    <div className="App">
      <Routes>
      {/* <Route path="/" element={<SignUp />} /> */}

        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/meal/:id" element={<Meal />} />        
        <Route path="/:id" element={<Recipe />} />  
      </Routes>
    </div>
  );
};

export default App;
