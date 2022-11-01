import './SignUp.css';
import { useRef, useState, useEffect } from "react"
import React from "react";
import { BrowserRouter as Router, Link, Navigate } from "react-router-dom";


const SignUp = () => {
    const userRef= useRef()
  const errRef= useRef()
  const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
const handleSubmit = async(e)=>{
      e.preventDefault();
      console.log(firstName, password)
      setFirstName('')
      setEmail('')
      setLastName('')
      setPassword('');
      setSuccess(true)
      Navigate('/Login')
  
  }

  return (

    <> 
         {success ? (
          
            <section >
                  <Navigate exact to='/Login'>SignUp</Navigate>
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
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            id="firstName"
            autoComplete="off"
            ref={userRef}
            required
            placeholder=" enter first name"
            ></input>
      <input
          className="signup__input"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
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
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          placeholder=" enter email"
    ></input>        

        <input
          className="signup__input"
          type="password"
          required
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
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
