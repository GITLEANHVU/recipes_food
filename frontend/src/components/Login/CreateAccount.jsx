import React, { useState } from 'react';
import './login.css'
const CreateAccount = () => {

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [role, setRole] = useState('user');
  const [status, setStatus] = useState(1);

  const handleSubmitForm = (e) => {
    e.preventDefault();

    console.log("name: ", name);
    console.log("address: ", address);
    console.log("email: ", email);
    console.log("username: ", username);
    console.log("password: ", password);
    console.log("password2: ", password2);
    console.log("role: ", role);
    console.log("status: ", status);
  }
  return (
    <div className="container_form">
      <form onSubmit={handleSubmitForm} className="form" id="createAccount">
        <h1 className="form__title">Create Account</h1>

        <div className="form__input-group">
          <input onChange={(e) => setName(e.target.value)} defaultValue={name} type="text" className="form__input" autoFocus placeholder="Name" />
        </div>
        <div className="form__input-group">
          <textarea onChange={(e) => setAddress(e.target.value)} className="form__input"  defaultValue={address} placeholder="HCM"></textarea>
        </div>
        <div className="form__input-group">
          <input onChange={(e) => setEmail(e.target.value)} defaultValue={email} type="email" className="form__input" placeholder="Email Address" />
        </div>
        <div className="form__input-group">
          <input onChange={(e) => setUsername(e.target.value)} defaultValue={username} type="text" id="signUpUsername" className="form__input" placeholder="Username" />
        </div>
        <div className="form__input-group">
          <input onChange={(e) => setPassword(e.target.value)} defaultValue={password} type="password" className="form__input" placeholder="Password" />
        </div>
        <div className="form__input-group">
          <input onChange={(e) => setPassword2(e.target.value)} defaultValue={password2} type="password" className="form__input" placeholder="Confirm password" />
        </div>

        <button className="form__button" type="submit">Continue</button>
        <p className="form__text">
          <a className="form__link" href="./" id="linkLogin">Already have an account? Sign in</a>
        </p>
      </form>
    </div>
  );
}

export default CreateAccount;
