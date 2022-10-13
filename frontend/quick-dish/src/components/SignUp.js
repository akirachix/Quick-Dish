import { useRef, useState, useEffect } from "react"
import React from "react";
import "./style.css";
import axios from "axios"
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// toast.configure()


const SignUp=()=> {
  const userRef= useRef()
  const errRef= useRef()
 
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)
   const[user, setUser]= useState({
    first_name: "",
    last_name: "",
    email: "",
    password : ""

   })
 const handleChange = e =>{
  const { name, value}=e.target
  setUser({
    ...user,
    [name]:value
  })
}

const signingIn=()=>{
  console.log(user)

  const{first_name, last_name,email,password,} = user;
  if(first_name && last_name && email && password){
    axios.post("http://127.0.0.1:8000/quickdish/api/register/",user)
    .then(res=>{
      console.log(res)
      toast('Successfully registered, Login to continue')
      // Navigate('/Login')
    })
    .catch(error =>{
      console.log(error)
    });
  }

}
  
useEffect(()=>{
    userRef.current.focus()
}, []
);
useEffect(()=>{
    setErrMsg('');
}, [ first_name, password]
);

const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log(first_name, password)
    setFirstName('')
    setEmail('')
    setLastName('')
    setPassword('');
    setSuccess(true)
    // Navigate('/Login')
}


 

  return(
    <> 
    {success ? (
      
        <section >
              {/* <Navigate exact to='/Login'>SignUp</Navigate> */}
        </section>
    ): (
    <section className="form"  >
        <p ref={errRef} className={errMsg? "errmsg":"offscreen"} 
        aria-live="assertive" >{errMsg}</p>
      
        <form onSubmit={handleSubmit} >
          <h1>Sign Up</h1>
       <input
            className="form__input"
            type="text"
            onChange= {handleChange}
            name="first_name"
            autoComplete="off"
            ref={userRef}
            required
            placeholder=" Enter Firstname"
 ></input> <br/>
    <input
            className="form__input"
            type="text"
            // value={lastName}
            onChange= {handleChange}
            name="last_name"
            ref={userRef}
            autoComplete="off"
            required
            placeholder=" Enter Lastname"
         
 ></input> <br/>

            <input type="email"  
            className="form__input"
            name="email" 
            ref={userRef}
            autoComplete="off"
            onChange= {handleChange}
            required
            placeholder=" Enter Email"
            ></input> <br/>
              <input type="password"  
            className="form__input"
            name="password" 
            ref={userRef}
            autoComplete="off"
            onChange= {handleChange}
           
            required
            placeholder=" Enter Password"
            ></input> <br/>
 <div className="btn">
              <button type="submit" onClick={signingIn} >Get Started</button>

       <p>_________ OR _________</p>
     
     </div>
        <div className="signin">
       <p className="signin">
           Already a QuickDish member?
           <a href="/Login" ><span>Sign In </span></a>
      </p>
      </div>
      </form>
    </section>
    )}
    </>
)
}
export default SignUp;
