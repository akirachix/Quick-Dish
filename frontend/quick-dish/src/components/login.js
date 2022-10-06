import React, {useState, } from 'react';
import './login.css'



function Login() {
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id, value}= e.target;
        
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }
    }
    const handleSubmit  = () => {
        console.log(email,password,confirmPassword);
    }
    return(
     <div className="form">
        <h4>Sign In</h4>
          <div className="form-body">
              <div className="email">
                  {/* <label className="form__label" for="email">Email </label> */}
                  <input  type="email" id="email" value={email} onChange = {(e) => handleInputChange(e)}  className="form__input" placeholder=" Enter Your Email/Username"/>
              </div>
              <div className="password">
              <div
               >
    </div>
              </div>
              <div className="confirm-password">
                  {/* <label className="form__label" for="confirmPassword">Confirm Password </label> */}
                  <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
              </div>
          </div>
          <div className="check">
                <input type="checkbox" id="keep" placeholder="Keep me logged in " value="Keep me logged in"></input> <br></br>
                <label className="logged">Remember Me</label> 
                {/* <label className="pass">forgot password?</label> */}
                </div>
          <div class="footer">
              <button type="submit" class="btn">Sign In</button>
                <p>Or</p> 
          </div>
          
        <p className='signin' >
            Not a member yet? <span>SignUp</span>
        </p>
        
      </div>      
    )       
}
export default Login;