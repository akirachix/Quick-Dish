import './App.css';
import Home from './Pages/Home/Home';
import Meal from './Pages/Meal/Meal';
import SignUp from './Pages/SignUp/SignUp';
import SignIn from './Pages/SignIn/SignIn';
import Recipe from './Pages/Recipe/Recipe';
import { Routes , Route } from 'react-router-dom';
// import Recipe from './pages/Recipe/Recipe';
// import Recipe from './Pages/Recipe/Recipe';
import AddIngredients from './components/AddIngredients';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />        
        <Route path="/meal/:id" element={<Meal />} /> 
        <Route path="/AddIngredients" element={<AddIngredients />} /> 
        <Route path="/:id" element={<Recipe />} />
        <Route path="/Home" element={<Home />} /> 
        <Route path="/Recipe" element={<Recipe />} /> 

       
      </Routes>
    </div>
  );
};
export default App;






