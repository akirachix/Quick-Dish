import './App.css';
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

      </Routes>
    </Router>  
    </div>
    

   
  );
}

export default App;
