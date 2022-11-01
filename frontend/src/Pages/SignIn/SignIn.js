import './SignIn.css';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="signin">
      <form className="signin__form">
        <h1>Sign In</h1>

        <input
          className="signin__input"
          type="email"
          required
          placeholder="Enter email address"
        />
        <input
          className="signin__input"
          type="password"
          required
          placeholder="Create password"
        />
        <button className="signin__button">Get Started</button>

        <p className="signin__text">or</p>

        <p className="signin__member">
          Not a member yet?{' '}
          <span>
            <Link to="/signup">Sign up</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
