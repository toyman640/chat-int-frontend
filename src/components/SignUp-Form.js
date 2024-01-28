import React from 'react';
import { useDispatch } from 'react-redux';
import { createUsers } from '../redux/users/users';

const SignUpForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const newUser = {
      username,
      name,
      email,
      password,
    };
    dispatch(createUsers(newUser));
    form.reset();
  };

  return (
    <>
      <p className="Title">Sign Up</p>
      <p className="Desc">Create an account</p>
      <form className="MainForm" onSubmit={handleSubmit}>
        <div className="FormControl">
          <label className="Label" htmlFor="username">
            Username
            <br />
            <input type="text" id="username" className="FormInput" name="username" placeholder="jonedoe123" />
          </label>
        </div>
        <div className="FormControl">
          <label className="Label" htmlFor="email">
            Full Name
            <br />
            <input type="email" id="email" className="FormInput" name="name" placeholder="jonedoe123@gmail.com" />
          </label>
        </div>
        <div className="FormControl">

          <label className="Label" htmlFor="email">
            Email
            <br />
            <input type="email" id="email" className="FormInput" name="email" placeholder="jonedoe123@gmail.com" />
          </label>
        </div>
        <div className="FormControl">
          <label className="Label" htmlFor="Password">
            Password
            <br />
            <input type="password" className="FormInput" id="password" name="password" />
          </label>
        </div>
        {/* <div className="FormControl">
          <label className="Label" htmlFor="Confirm Password">
            Confirm Password
            <br />
            <input type="password" className="FormInput" id="Confirm-Password" name="password" />
          </label>
        </div> */}

        <div>
          <input type="Submit" className="FormButton" value="Sign Up" />
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
