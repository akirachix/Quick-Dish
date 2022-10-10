import React, {useRef, useState, useEffect } from "react";
import "./login.css";
import IconButton from "@material-ui/core/IconButton";
// import recipe from ".../src/components/recipe.jpeg";
// import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import { BrowserRouter as Router, Link, Navigate } from "react-router-dom";

function Login() {
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

  const handleSubmit = async(e)=>{
    e.preventDefault();
        console.log(email, password);
        setEmail('')
        setPassword('')  
        setSuccess(true)
        Navigate('/Home')

}

return(
  <> 
  {success ? (
    
      <section >
            <Navigate exact to='/Home'>Login</Navigate>
      </section>
  ): (
    
  <section className="form1"  >
      <p ref={errRef} className={errMsg? "errmsg":"offscreen"} 
      aria-live="assertive" >{errMsg}</p>
    
      <form onSubmit={handleSubmit} >
        <h1>Sign in</h1>
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
            ref={userRef}
            autoComplete="off"
            id="password"
            required
            placeholder="password"
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

<div className="btn">
            <button>Get Started</button>

     <p>_________ OR _________</p>
   
   </div>
   <div className="signup">
         <p className="signup">
           Not a member yet?
             <a href="/" ><span>Sign up </span></a>
         </p>
       </div>
    </form>
  </section>
  )}
  </>
)
}
export default Login;
