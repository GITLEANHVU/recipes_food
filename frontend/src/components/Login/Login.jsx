import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext';
import './login.css'
export default function Login() {

  const apiURL = `${process.env.REACT_APP_API_LAV_READ_SINGLE}`;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [auth, setAuth] = useContext(AuthContext);
  const history = useHistory();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const fetchUser = async (inputURL, inputData) => {
      const data = { ...inputData }
      const response = await fetch(inputURL, {
        method: "POST",
        body: JSON.stringify(data),
      });
      return response.json();
    }
    console.log(username, password)
    fetchUser(apiURL, { email: username, password: password })
      .then(result => {
        if (result.length > 0) {
          setAuth({ isAuth: true, user: result[0] })
          // save to localStore
          localStorage.setItem('isAuth', true);
          localStorage.setItem('user', JSON.stringify(result[0]));

          // animate đăng nhập thành công

          setTimeout(() => {
            history.push('/')
          }, 1500)
        } else {
          // animate đăng nhập KHÔNG thành công
          setSpanEL([...spanEL, 1])
        }
      });
  }

  useEffect(() => {
    if (localStorage.getItem('isAuth')) {
      history.push("/");
    }
  }, [auth])

  const [spanEL, setSpanEL] = useState([]);

  return (
    <div className="body-form">
      <div className="container_form">
        <div className="level">
          {
            spanEL.map((item, idx) => (<span key={idx} style={{ width: "33.33%", transition: "1s" }}></span>))
          }
        </div>
        <form onSubmit={handleSubmitForm} className="form" id="login">
          <h2 className="form__title">Login</h2>

          <div className="form__input-group">
            {spanEL.length >= 3 ? (
              <input disabled onChange={(e) => setUsername(e.target.value)} type="text" className="form__input" autoFocus placeholder="Không thể nhập email" />
            ) : (
              <input onChange={(e) => setUsername(e.target.value)} type="text" className="form__input" autoFocus placeholder="Email " />
            )}
            
            
          </div>
          <div className="form__input-group">
          {spanEL.length >= 3 ? (
              <input disabled onChange={(e) => setPassword(e.target.value)} type="password" className="form__input" autoFocus placeholder="Không thể nhập password" autoComplete="on" />
            ) : (
              <input onChange={(e) => setPassword(e.target.value)} type="password" className="form__input" autoFocus placeholder="Password" autoComplete="on" />
            )}
            

          </div>
          <div className="form__input-group">
            {
              spanEL.length >= 3 ? (
                <button className="form__button" type="submit" disabled>Không thể submit</button>    
              ) : (
                <button className="form__button" type="submit">Continue</button>
              )
            }
          </div>
          <p className="form__text">
            <Link className="form__link" to="/register" id="linkCreateAccount">Don't have an account? Create account</Link>
          </p>
        </form>
      </div>
    </div>
  );

}
