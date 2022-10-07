import './App.css';
import Login from './components/login';
import SignUp from './components/signup';
import { BrowserRouter as Router, Link } from "react-router-dom";


function App() {
  return (
     <div className="App">
      <SignUp />
      <Login />
     
    </div>

   
  );
}

export default App;
