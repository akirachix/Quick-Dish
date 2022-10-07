import React, { useState } from "react";
import "./style.css";
import IconButton from "@material-ui/core/IconButton";
// import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";

import { BrowserRouter as Router, Link } from "react-router-dom";

function SignUp() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
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
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
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
    console.log(firstName, lastName, email, password, confirmPassword);
  };
  return (
    <div className="form">
      <h4>Sign Up</h4>
      <div className="form-body">
        <div className="username">
          <input
            className="form__input"
            type="text"
            value={firstName}
            onChange={(e) => handleInputChange(e)}
            id="firstName"
            placeholder=" enter firstName"
          />
        </div>
        <div className="lastname">
          <input
            type="text"
            name=""
            id="lastName"
            value={lastName}
            onChange={(e) => handleInputChange(e)}
            className="form__input"
            placeholder=" enter lastName"
          />
        </div>
        <div className="email">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => handleInputChange(e)}
            className="form__input"
            placeholder=" enter email address"
          />
        </div>
        <div className="password">
          <div>
            <Input
              className="form__input"
              id="password"
              placeholder=" enter password"
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
      <div class="footer">
        <button type="submit" class="btn">
          Get started
        </button>
        <p>__________ OR _________</p>
      </div>

      <div className="signin">
        <p className="signin">
          Already a QuickDish member?
          <Router>
            <Link to="/Login"></Link>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              {" "}
              <span>Sign in </span>{" "}
            </a>
          </Router>
        </p>
      </div>
    </div>
  );
}
export default SignUp;



