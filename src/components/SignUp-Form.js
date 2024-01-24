import React from 'react';

const SignUpForm = () => {
  <form>
    <div>
      <label htmlFor="username">
        Username
        <input type="text" id="username" name="username" />
      </label>
    </div>
    <div>
      <label htmlFor="email">
        Email
        <input type="email" id="email" name="email" />
      </label>
    </div>
    <div>
      <input type="Submit" value="Sign Up" />
    </div>
  </form>;
};

export default SignUpForm;
