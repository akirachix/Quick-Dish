import './App.css';
import Home from './Home';
import Meal from './Meal';
import SignUp from './SignUp';
import SignIn from './Login';
import { Routes , Route } from 'react-router-dom';
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/meal/:id" element={<Meal />} />
      </Routes>
    </div>
  );
};

export default App;
