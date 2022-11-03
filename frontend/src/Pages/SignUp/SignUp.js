import './SignUp.css';
import { useRef, useState, useEffect } from "react"
import axios from 'axios'
import React from "react";
import {  Navigate} from "react-router-dom";


const SignUp = () => {
  const userRef= useRef()
  const errRef= useRef()
  const [firstName] = useState('');
    const [lastName] = useState('');
    const [email] = useState('');
    const [password] = useState('');
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)
    
    useEffect(()=>{
      userRef.current.focus()
  }, []
  );
  useEffect(()=>{
    setErrMsg('');
}, [ firstName, password]
);


const [user,setUser] = useState({
  first_name:"",
  last_name:"",
  email: "",
  password:"",
})

const handleChange = e =>{
  const {name,value} = e.target
  setUser({
  ...user,//spread operator 
  [name]:value

  })
  
  }

const handleSubmit = ()=>{
      setSuccess(true) 

      const 
      {first_name,last_name,email,password} = user
      if (first_name && last_name && email && password){
        axios.post("/api/auth/",user )
        .then(res=>{
          console.log(res)
          Navigate("/FullMeal")
      })
      .catch(error=>{
        console.log(error)

    })
    }
    else{
      console.log(user)
   alert("invalid input")
  };

      
  }

  return (

    <> 
         {success ? (
          
            <section >
                  <Navigate exact to='/FullMeal'>SignUp</Navigate>
            </section>
        ): (
    <div className="signup">
         <p ref={errRef} className={errMsg? "errmsg":"offscreen"} 
          aria-live="assertive" >{errMsg}</p>

      <form className="signup__form" onSubmit={handleSubmit} >
        <h1>Sign Up</h1>
        <input
          className="signup__input"
            type="text"
            name='firstName'
            onChange={handleChange}
            id="firstName"
            autoComplete="off"
            ref={userRef}
            required
            placeholder=" enter first name"
            ></input>
      <input
          className="signup__input"
          type="text"
          name='lastName'
          onChange={handleChange}
          id="lastName"
          ref={userRef}
          autoComplete="off"
          required
          placeholder=" enter last name"
        ></input>
        <input 
          className="signup__input"
          id="email" 
          type="email"
          ref={userRef}
          autoComplete="off"
          onChange={handleChange}
          name="email"
          required
          placeholder=" enter email"
    ></input>        

        <input
          className="signup__input"
          type="password"
          required
          ref={userRef}
          name="password"
          autoComplete="off"
          onChange={handleChange}
          placeholder="Create password"

        ></input> 
        <button className="signup__button">Get Started</button>

        <p className="signup__text">___________Or___________</p>

        <p className="signup__member">
          Already a QuickDish member?{' '}
          <span>
          <a href="/SignIn" ><span>Sign in </span></a>
          </span>
        </p>
      </form>
    </div>
        )}
    </>
  );
};

export default SignUp;
