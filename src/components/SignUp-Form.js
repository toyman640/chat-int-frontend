import React from 'react';

const SignUpForm = () => (
  <form className="MainForm">
    <div className="FormControl">
      <label className="Label" htmlFor="username">
        Username
        <br />
        <input type="text" id="username" name="username" placeholder="jonedoe123" />
      </label>
    </div>
    <div className="FormControl">
      <label className="Label" htmlFor="email">
        Email
        <br />
        <input type="email" id="email" name="email" placeholder="jonedoe123@gmail.com" />
      </label>
    </div>
    <div>
      <input type="Submit" className="FormButton" value="Sign Up" />
    </div>
  </form>
);

export default SignUpForm;
