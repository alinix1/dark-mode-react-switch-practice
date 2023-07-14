import React from 'react';

const Form = () => {
  return (
    <div className="main">
      <p className="sign" align="center">
        Sign in
      </p>
      <form className="form1">
        <input className="username" type="text" placeholder="Username"></input>
        <input className="password" type="text" placeholder="Password"></input>
        <a className="submit" align="center">
          Sign in
        </a>
        <p className="forgot" align="center">
          <a href="#">Forgot Password?</a>
        </p>
      </form>
    </div>
  );
};

export default Form;
