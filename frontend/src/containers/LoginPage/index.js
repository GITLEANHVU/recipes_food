import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { API_LINK_ACCOUNT_READ_SINGLE } from '../../api_link';
import { HeaderContext } from '../../HeaderProvider';

export default function LoginPage() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { auth } = useContext(HeaderContext);
  async function getAccount() {
    const res = await axios.post(`${API_LINK_ACCOUNT_READ_SINGLE}`, JSON.stringify({ email: email, password: password }));
    console.log(res.data);
    if (Array(res.data).length > 0) {
      const user = res.data[0];

      delete user.role;
      delete user.status;
      delete user.password;
      delete user.updated_at;

      localStorage.setItem('account', JSON.stringify(user));

      window.location.href = '/';
    } else {
      alert('Email or password is incorrect');
    }
  }

  function handleSubmitForm(event) {
    event.preventDefault();
    console.log("email, password = ", email, password);
    getAccount();
  }

  useEffect(() => {
    if (auth !== null) {
      alert('You are already logged in');
      window.location.href = '/';
    }
  }, [auth]);
  
  return (
    <div className="text-center"
      style={{
        height: '80vh',
        display: "flex",
        alignItems: "center",
        paddingTop: "40px",
        paddingBottom: "40px",
      }}>
      <div className="form-signin">
        <form onSubmit={handleSubmitForm}>
          <h1 className="h2 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="Your email" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Your password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
          <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
        </form>
      </div>
    </div>
  )
}
