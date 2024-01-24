import React from 'react';

const SignUpForm = () => (
  <form className="MainForm">
    <div className="FormControl">
      <label htmlFor="username">
        Username
        <br />
        <input type="text" id="username" name="username" />
      </label>
    </div>
    <div className="FormControl">
      <label htmlFor="email">
        Email
        <br />
        <input type="email" id="email" name="email" />
      </label>
    </div>
    <div>
      <input type="Submit" value="Sign Up" />
    </div>
  </form>
);

export default SignUpForm;
