import './SignUp.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="signup">
      <form className="signup__form">
        <h1>Sign Up</h1>
        <input
          className="signup__input"
          type="text"
          required
          placeholder="Enter first name"
        />
        <input
          className="signup__input"
          type="text"
          required
          placeholder="Enter last name"
        />
        <input
          className="signup__input"
          type="email"
          required
          placeholder="Enter email address"
        />
        <input
          className="signup__input"
          type="password"
          required
          placeholder="Create password"
        />
        <button className="signup__button">Get Started</button>

        <p className="signup__text">or</p>

        <p className="signup__member">
          Already a QuickDish member?{' '}
          <span>
            <Link to="/signin">Sign in</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;

