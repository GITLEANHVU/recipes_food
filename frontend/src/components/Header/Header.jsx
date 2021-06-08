import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext';
// import './Header.css';

const Header = () => {
  const [auth, setAuth] = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-background bg-dark">
      <div className="container-fluid">
        <Link to="/home" className="navbar-brand" >RecipeFoodFE2</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/home" className="nav-link is-active" >Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/my-recipe" className="nav-link" >My Recipe</Link>
            </li>
            <li className="nav-item">
              <Link to="/add-recipe" className="nav-link" >New Recipe</Link>
            </li>

            {
              auth.isAuth ? (<li className="nav-item"> <Link to="/login" className="nav-link">{auth.user.name}|Logout</Link></li>)
              :(<li className="nav-item"><Link to="/login" className="nav-link" href="#">Login</Link></li>)
            }

            <span className="nav-indicator"></span>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;