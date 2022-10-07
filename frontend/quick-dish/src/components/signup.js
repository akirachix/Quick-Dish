import { useRef, useState, useEffect } from "react"
import React from "react";
import "./style.css";
import IconButton from "@material-ui/core/IconButton";
// import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import { BrowserRouter as Router, Link } from "react-router-dom";

const SignUp=()=> {
  const userRef= useRef()
  const errRef= useRef()
 
 
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState('');

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
    setConfirmPassword('')
    setLastName('')
    setPassword('');
    setSuccess(true)
}
  // toggle
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  // const handleInputChange = (e) => {
  //   const { id, value } = e.target;
  //   if (id === "firstName") {
  //     setFirstName(value);
  //   }
  //   if (id === "lastName") {
  //     setLastName(value);
  //   }
  //   if (id === "email") {
  //     setEmail(value);
  //   }
  //   if (id === "password") {
  //     setPassword(value);
  //   }
  //   if (id === "confirmPassword") {
  //     setConfirmPassword(value);
  //   }
  // };

  // const handleSubmit = () => {
  //   console.log(firstName, lastName, email, password, confirmPassword);
  // };

  return(
    <> 
    {success ? (
        <section >
            <p>
                <a href="#" >login</a>
            </p>
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
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            id="firstName"
            autoComplete="off"
            ref={userRef}
            required
            placeholder=" enter firstName"
 ></input> <br/>
    <input
            className="form__input"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            id="lastName"
            ref={userRef}
            autoComplete="off"
            required
            placeholder=" enter lastName"
 ></input> <br/>

            <input type="text"  
            className="form__input"
            id="email" 
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            placeholder=" enter email"
            ></input> <br/>
            <Input
              className="form__input"
              id="password"
              placeholder=" create password"
              type={values.showPassword ? "text" : "password"}
              onChange={handlePasswordChange("password")}
              value={values.password}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            ></Input> <br/>

            <input type="password" className="form__input"
            id="confirmpassword" 
            autoComplete="off"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            required
            placeholder="comfirm password"

            
            ></input> <br/>
 <div class="btn">
              <button>Get Started</button>

       <p>_________ OR _________</p>
     
     </div>
        <div className="signin">
       <p className="signin">
           Already a QuickDish member?
           <a href="login.js" ><span>Sign In </span></a>
        
      </p>
      </div>
      </form>
    </section>
    )}
    </>
)


  // return (
  //   <div className="form">
  //     <h1>Sign Up</h1>
  //     <div className="form-body">
  //       <div className="username">
  //         <input
  //           className="form__input"
  //           type="text"
  //           value={firstName}
  //           onChange={(e) => handleInputChange(e)}
  //           id="firstName"
  //           placeholder=" enter firstName"
  //         />
  //       </div>
  //       <div className="lastname">
  //         <input
  //           type="text"
  //           name=""
  //           id="lastName"
  //           value={lastName}
  //           onChange={(e) => handleInputChange(e)}
  //           className="form__input"
  //           placeholder=" enter lastName"
  //         />
  //       </div>
  //       <div className="email">
  //         <input
  //           type="email"
  //           id="email"
  //           value={email}
  //           onChange={(e) => handleInputChange(e)}
  //           className="form__input"
  //           placeholder=" enter email address"
  //         />
  //       </div>
  //       <div className="password">
  //         <div>
  //           <Input
  //             className="form__input"
  //             id="password"
  //             placeholder=" create password"
  //             type={values.showPassword ? "text" : "password"}
  //             onChange={handlePasswordChange("password")}
  //             value={values.password}
  //             endAdornment={
  //               <InputAdornment position="end">
  //                 <IconButton
  //                   onClick={handleClickShowPassword}
  //                   onMouseDown={handleMouseDownPassword}
  //                 >
  //                   {values.showPassword ? <Visibility /> : <VisibilityOff />}
  //                 </IconButton>
  //               </InputAdornment>
  //             }
  //           />
  //         </div>
  //       </div>
  //     </div>

  //      <div class="btn">
  //      <Router>
  //           <Link to="/login.js"></Link>
  //           <a href="signup.js" target="_blank" rel="noreferrer">
  //             <button>Get Started</button>
  //           </a>
  //     </Router>
  //       <p>_________ OR _________</p>
     
  //     </div>
  //     <div className="signin">
  //       <p className="signin">
  //         Already a QuickDish member?
  //         <Router>
  //           <Link to="/Login"></Link>
  //           <a href="https://google.com" target="_blank" rel="noreferrer">
  //             {" "}
  //             <span>Sign In </span>
  //           </a>
  //         </Router>
  //       </p>
  //     </div>
  //   </div>
  // );
}
export default SignUp;
