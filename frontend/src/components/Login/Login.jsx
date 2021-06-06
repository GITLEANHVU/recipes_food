import React, { useState } from 'react';


export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log('form submit');

    console.log("username: ", username)
    console.log("password: ", password)
    
  }
  return (
    <div className="container_form">
      <form onSubmit={handleSubmitForm} className="form" id="login">
        <h1 className="form__title">Login</h1>
        <div className="form__message form__message--error" />
        <div className="form__input-group">
          <input onChange={(e) => setUsername(e.target.value)} type="text" className="form__input" autoFocus placeholder="Username or email" />
          <div className="form__input-error-message" />
        </div>
        <div className="form__input-group">
          <input  onChange={(e) => setPassword(e.target.value)} type="password" className="form__input" autoFocus  placeholder="Password" />
          <div className="form__input-error-message" />
        </div>
        <button className="form__button" type="submit">Continue</button>
        <p className="form__text">
          <a href="#" className="form__link">Forgot your password?</a>
        </p>
        <p className="form__text">
          <a className="form__link" href="./" id="linkCreateAccount">Don't have an account? Create account</a>
        </p>
      </form>
    </div>
  );
}
