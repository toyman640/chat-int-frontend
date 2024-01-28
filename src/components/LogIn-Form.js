import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { loginUser } from '../redux/users/login';

const LogInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogIn = async (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const password = form.password.value;

    try {
      dispatch(loginUser({ username, password }));
      navigate('/home-page');
    } catch (error) {
      // Handle login failure (e.g., display error message)
      console.error('Login failed:', error.message);
    }
  };

  return (
    <>
      <p className="Title">Welcome back</p>
      <p className="Desc">Login to your account</p>
      <button type="button">
        Continue with Google
      </button>
      <form className="MainForm" onSubmit={handleLogIn}>
        <div className="FormControl">
          <label className="Label" htmlFor="username">
            Username
            <br />
            <input className="FormInput" type="text" id="username" name="username" autoComplete="on" placeholder="jonedoe123" />
          </label>
        </div>
        <div className="FormControl">
          <label className="Label" htmlFor="password">
            Password
            <br />
            <input type="password" className="FormInput" id="password" name="password" placeholder="jonedoe123@gmail.com" />
          </label>
        </div>
        <div>
          <input type="Submit" className="FormButton" />
        </div>
      </form>
    </>
  );
};

export default LogInForm;
