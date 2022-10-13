import './App.css';
<<<<<<< HEAD
import Login from './components/Login';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Body from "./components/Body"
// import Logout from './components/Logout';
// import AddIngredients from './components/AddIngredients';

function App() {

  return (
     <div className="App">
      {/* <Logout/> */}
      {/* <AddIngredients/> */}
      <Router>
        <Routes>
        <Route exact path ='/' element={<SignUp/>} component={<SignUp/>} />
      <Route exact path ='/Login' element={<Login/>} component={<Login/>} />
      <Route path="/Home" element={<Body/>} component={Body} />

=======
import Home from './Pages/Home/Home';
import Meal from './Pages/Meal/Meal';
import SignUp from './Pages/SignUp/SignUp'; 
import SignIn from './Pages/SignIn/SignIn';
import { Routes , Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />        
        <Route path="/meal/:id" element={<Meal />} />        
>>>>>>> 2a7f20a6f1673f436a83c389543ae7046b4d2b94
      </Routes>
    </div>
  );
};

export default App;
