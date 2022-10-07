<<<<<<< HEAD
=======
// import logo from './logo.svg';
>>>>>>> f4d2d0a919ae8e0b5566aa6cb880fd75d8ccc3aa
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";


import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Body from "./Body"

function App() {
  return (
    <div className="App">
      



    <Router>
    <div className="app">
        <Routes>
        <Route path="/" element={<Body />}>
        </Route>
        </Routes>
    </div>
    </Router>
  


     
    </div>
    

   
  );
}

export default App;
