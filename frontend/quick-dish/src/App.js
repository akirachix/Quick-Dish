
// import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Body from "./Body"

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
        <Route path="/" element={<Body />}>
        <Route exact path ='/' element={<SignUp/>} component={<SignUp/>} />
        <Route exact path ='/Login' element={<Login/>} component={<Login/>} />
        </Route>
        </Routes>
        </Router>
    </div>  
   
  );
}

export default App;
