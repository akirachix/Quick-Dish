import React from 'react'
import Header from './Header'
import Home from './Home'
import "./bar.css";

import { SearchOutlined, ChildCare } from '@material-ui/icons';
import Link from "react-router-dom"

function Body() {
  return (
    <div className="body">
        <Header />
        <Home />
  



        <div className="bar__text">
            <h2>Select Ingredients</h2>
        </div>
        <div className="bar__add">
        <SearchOutlined className="bar__addIcon"/>
        <ChildCare className="bar__addIcon"/>
                
        </div>
 
        </div>
)
}

export default Body;