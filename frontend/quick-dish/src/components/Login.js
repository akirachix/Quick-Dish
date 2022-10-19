import React, { useRef, useState, useEffect } from 'react';
import './login.css';
import { Navigate } from 'react-router-dom';

function Login() {
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMsg('');
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    setEmail('');
    setPassword('');
    setSuccess(true);
    Navigate('/Home');
  };

  return (
    <>
      {success ? (
        <section>
          <Navigate exact to="/Home">
            Login
          </Navigate>
        </section>
      ) : (
        <section className="form1">
          <p
            ref={errRef}
            className={errMsg ? 'errmsg' : 'offscreen'}
            aria-live="assertive"
          >
            {errMsg}
          </p>

          <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <input
              type="email"
              className="form__input"
              id="email"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              placeholder=" Enter Email"
            ></input>{' '}
            <br />
            <input
              type="password"
              className="form__input"
              id="password"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              placeholder=" Enter Password"
            ></input>{' '}
            <br />
            <div className="box">
              <label>
                <input type="checkbox" name="text" />
                Remember Me
              </label>
              <label className="forgetpswd">forget Password?</label>
            </div>
            <div className="btn">
              <button>Get Started</button>

              <p>_________ OR _________</p>
            </div>
            <div className="signup">
              <p className="signup">
                Not a member yet?
                <a href="/">
                  <span>Sign Up </span>
                </a>
              </p>
            </div>
          </form>
        </section>
      )}
    </>
  );
}
export default Login;
