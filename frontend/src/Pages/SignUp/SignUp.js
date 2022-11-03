import './SignUp.css';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context/context';

const SignUp = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { recipeId } = useGlobalContext();

  const signUp = async (e) => {
    e.preventDefault();

    try {
      const user = {
        first_name: firstName,
        last_name: lastName,
        email,
        password,
      };

      if (firstName && lastName && email && password) {
        const response = await axios.post('/api/auth/', user);
        await response.data;
        return navigate(`/meal/${recipeId}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signup">
      <form className="signup__form" onSubmit={signUp}>
        <h1>Sign Up</h1>
        <input
          className="signup__input"
          type="text"
          required
          placeholder="Enter first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          className="signup__input"
          type="text"
          required
          placeholder="Enter last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          className="signup__input"
          type="email"
          required
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="signup__input"
          type="password"
          required
          placeholder="Create password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="signup__button" type="submit">
          Get Started
        </button>

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
