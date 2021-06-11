import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext';

export default function Login() {

  const apiURL = `${process.env.REACT_APP_API_URL}`;
  const nameAPI = "Account";
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [auth, setAuth] = useContext(AuthContext);
  const history = useHistory();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const url = `${apiURL}/${nameAPI}/read_single.php`;
    const fetchUser = async (inputURL, inputData) => {
      const data = { ...inputData }
      const response = await fetch(inputURL, {
        method: "POST",
        body: JSON.stringify(data),
      });
      return response.json();
    }
    console.log(username, password)
    fetchUser(url, { email: username, password: password })
      .then(result => {
        console.log(result)
        if (result.length > 0) {
          setAuth({ isAuth: true, user: result[0] })
          console.log(result[0])

          setTimeout(() => {
            history.push('/')
          }, 1500)
        }
      });
  }

  return (
    <div className="body-form">
      <div className="container_form">
        <div></div>
        <form onSubmit={handleSubmitForm} className="form" id="login">
          <h2 className="form__title">Login</h2>
          <div className="form__message form__message--error" />
          <div className="form__input-group">
            <input onChange={(e) => setUsername(e.target.value)} type="text" className="form__input" autoFocus placeholder="Username or email" />
            <div className="form__input-error-message" />
          </div>
          <div className="form__input-group">
            <input onChange={(e) => setPassword(e.target.value)} type="password" className="form__input" autoFocus placeholder="Password" autoComplete="on" />
            <div className="form__input-error-message" />
          </div>
          <button className="form__button" type="submit">Continue</button>
          <p className="form__text">
            <Link className="form__link" to="/register" id="linkCreateAccount">Don't have an account? Create account</Link>
          </p>
        </form>
      </div>
    </div>
  );

}
