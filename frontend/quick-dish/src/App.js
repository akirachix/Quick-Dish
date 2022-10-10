
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import Body from "./components/Body"
=======
import Body from "./components/Body";

>>>>>>> e3ee79f688d887eacb200c11b76a251980dacdb8


function App() {
  var url ="https://api.spoonacular.com/food/ingredients/search"
  

  return (
     <div className="App">
      <Body/>
      <Router>
        <Routes>
        {/* <Route exact path ='/' element={<SignUp/>} component={<SignUp/>} />
      <Route exact path ='/Login' element={<Login/>} component={<Login/>} />
      <Route path="/Home" element={<Body/>} component={Body} /> */}

      </Routes>
    </Router>  
    </div>
       
  );
}

export default App;
