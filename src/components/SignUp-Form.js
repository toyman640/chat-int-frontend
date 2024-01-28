import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUsers } from '../redux/users/users';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [successMessage, setSuccessMessage] = useState('');

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
    // dispatch(createUsers(newUser));
    // form.reset();
    try {
      // Dispatch the createUsers action
      dispatch(createUsers(newUser));

      // Set the success message
      setSuccessMessage('User created successfully!');

      // Reset the form
      form.reset();
    } catch (error) {
      // Handle error if user creation fails
      console.error('Error creating user:', error);
    }
  };

  return (
    <>
      <p className="Title">Sign Up</p>
      <p className="Desc">Create an account</p>
      {successMessage && <p className="SuccessMessage">{successMessage}</p>}
      <form className="MainForm" onSubmit={handleSubmit}>
        <div className="FormControl">
          <label className="Label" htmlFor="username">
            Username
            <br />
            <input type="text" id="username" className="FormInput" name="username" placeholder="jonedoe123" required />
          </label>
        </div>
        <div className="FormControl">
          <label className="Label" htmlFor="email">
            Full Name
            <br />
            <input type="text" id="name" className="FormInput" name="name" placeholder="jonedoe123@gmail.com" required />
          </label>
        </div>
        <div className="FormControl">

          <label className="Label" htmlFor="email">
            Email
            <br />
            <input type="email" id="email" className="FormInput" name="email" placeholder="jonedoe123@gmail.com" required />
          </label>
        </div>
        <div className="FormControl">
          <label className="Label" htmlFor="Password">
            Password
            <br />
            <input type="password" className="FormInput" id="password" name="password" required />
          </label>
        </div>

        <div>
          <input type="Submit" className="FormButton" value="Sign Up" />
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
