import React, { useState } from "react";
import "./login.css";
import IconButton from "@material-ui/core/IconButton";
// import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);


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

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  };
  

  const handleSubmit = () => {
    console.log(email, password, confirmPassword);
  };
  return (
    
    <div className="form">
      <h1>Sign In</h1>
      <div className="form-body">
        <div className="email">
           
          <input  required={true}
            type="email"
            id="email"
            value={email}
            onChange={(e) => handleInputChange(e)}
            className="form__input"
            placeholder=" Enter Your Email/Username"
          />
        </div>
        <div className="password">
          <div>
            <Input required={true}
              className="form__input"
              id="password"
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
            />
          </div>
        </div>
      </div>
      <div className="check">
        <label>
          <input type="checkbox" name="text" />
          Remember Me
        </label>
        <label className="forgetpswd">forget Password?</label>
      </div>
     
      <div class="footer">
        <button type="submit" class="btn" onClick={handleSubmit} >
          Sign In
        </button>
        <p>_________ OR _________</p>{" "}
      </div>
      <div className="signup">
        <p className="signup">
          Not a member yet?
          <Router>
            <Link to="/Login"></Link>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              {/* {" "} */}
              <span>Sign Up </span>
            </a>
          </Router>
        </p>
      </div>
    </div>
  );
}
export default Login;
