import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";


function App() {
  return (
     <div className="App">

      {/* <Recipe/> */}
      <SignUp/>
      <Login/>

      <Router>
        <Routes>
        <Route exact path ='/' element={<SignUp/>} component={<SignUp/>} />
      <Route exact path ='/Login' element={<Login/>} component={<Login/>} />
      </Routes>
    </Router>

     
    </div>
    

   
  );
}

export default App;
