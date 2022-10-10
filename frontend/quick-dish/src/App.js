// import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Body from "./Body"

function App() {
  var url ="https://api.spoonacular.com/food/ingredients/search"
  

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
