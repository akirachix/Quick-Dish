import './App.css';
import Home from './Pages/Home/Home';
import Meal from './Pages/Meal/Meal';
import SignUp from './Pages/SignUp/SignUp';
import SignIn from './Pages/SignIn/SignIn';
import Recipe from './Pages/Recipe/Recipe';
import { Routes , Route } from 'react-router-dom';
import AddIngredients from './components/AddIngredients';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/meal/:id" element={<Meal />} />
        <Route path="/:id" element={<Recipe />} />
        <Route path="/add-ingredients" element={<AddIngredients />} />
      </Routes>
    </div>
  );
};
export default App;






