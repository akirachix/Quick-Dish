import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";


function App() {
  return (
     <div className="App">
<<<<<<< HEAD
      {/* <Recipe/> */}
      <SignUp/>
      <Login/>

=======
      <Router>
        <Routes>
        <Route exact path ='/' element={<SignUp/>} component={<SignUp/>} />
      <Route exact path ='/Login' element={<Login/>} component={<Login/>} />
      </Routes>
    </Router>
>>>>>>> 0c52fd1bf42b7f9897e2830e14cd2f3aa05b605f
     
    </div>
    

   
  );
}

export default App;
