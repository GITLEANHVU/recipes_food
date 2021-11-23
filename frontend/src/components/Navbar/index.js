import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { HeaderContext } from '../../HeaderProvider';
import A from '../A';

export default function Navbar() {

  const { auth } = useContext(HeaderContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (auth === null) {
      setUser(null);
    } else {
      setUser(auth);
    }
  }, [auth]);

  function onLogout() {
    localStorage.removeItem('account');
    setUser(null);
    window.location.href = '/sign-in';
  }
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
      <div className="container-fluid">
        <A
          content={'Recipe App'}
          btnTheme={'navbar-brand'}
          linkTo={`/`}
        />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" exact className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/recipe" className="nav-link">Recipe</NavLink>
            </li>
          </ul>
          <form className="d-flex mb-2">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {
              user !== null ?
                <>
                  <li className="nav-item d-flex justify-content-right align-items-center mb-2 me-2">
                    <span className="material-icons">account_circle</span>
                    <span className="ms-2">{user.name}</span>
                  </li>
                  <li className="nav-item d-flex justify-content-right align-items-center mb-2">
                    <strong
                      onClick={onLogout}
                      style={{
                        cursor: "pointer",
                        display: "block",
                        color: "#007bff",
                      }}>Logout</strong>
                  </li>
                </>
                : <li className="nav-item">
                  <NavLink to="/sign-in" className="nav-link">Login</NavLink>
                </li>
            }
          </ul>

        </div>
      </div>
    </nav>
  )
}
