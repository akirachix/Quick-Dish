import './SignIn.css';
import React, {useRef, useState, useEffect } from "react";

import {Navigate} from 'react-router-dom';

const SignIn = () => {
  const userRef= useRef()
  const errRef= useRef()

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
}, [ email, password]
);

const handleSubmit = async(e)=>{
      e.preventDefault();
          console.log(email, password);
          setEmail('')
          setPassword('')  
          setSuccess(true)
          Navigate('/FullMeal')
  
  }
  return (
    <> 
      {success ? (
        
          <section >
                <Navigate exact to='/FullMeal'>Login</Navigate>
          </section>
      ): (
        
    <div className="signin">
        <p ref={errRef} className={errMsg? "errmsg":"offscreen"} 
      aria-live="assertive" >{errMsg}</p>

      <form className="signin__form" onSubmit={ handleSubmit} >
        <h1>Sign In</h1>

        <input type="text"
          className="signin__input"
          id="email" 
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    
                    placeholder=" enter email"
        />
        <input type="password"
          className="signin__input"
                     ref={userRef}
                      autoComplete="off"
                      id="password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      value={password}
                      placeholder="password"
                     
        />

        <button className="signin__button">Get Started</button>
         <div className='box'>
            <label>
                <input type="checkbox" name="text" />
                  Remember Me
               </label>
                <label className='forgetpswd'>forget Password?</label>
                  </div>
        <button className="signin__button" >Get Started</button>

        <p className="signin__text">___________Or___________</p>

        <p className="signin__member">
          Not a member yet?{' '}
          <span>
          <a href="/SignUP" ><span>Sign up </span></a>
          </span>
        </p>
      </form>
     
    </div>
      )}
     </>
  
  );
};

export default SignIn;
