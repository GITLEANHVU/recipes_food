import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext'
function Nav() {
  const [auth, setAuth] = useContext(AuthContext);
  const logOut = () => {
    setAuth({ isAuth: false, user: {} });
    localStorage.removeItem('isAuth');
    localStorage.removeItem('user')
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={navStyle.navNavbar}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand me-lg-5" href="#">Recipe food</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={navStyle.navbar_collapseCollapseShow}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={navStyle.navbarSupportedContent_1}>
            <li className="nav-item" >
              <Link to="/" className="nav-link" href="#" style={navStyle.navLink} onMouseLeave={e => navStyle.navLinkMouseLeave(e)} onMouseOver={(e) => navStyle.navLinkMouseOver(e)}>Home</Link>
            </li>
            <li className="nav-item">
            {
                auth.isAuth ?
                  (<Link to="/my-recipes" className="nav-link px-lg-3" href="#" style={navStyle.navLink} onMouseLeave={e => navStyle.navLinkMouseLeave(e)} onMouseOver={(e) => navStyle.navLinkMouseOver(e)}>My recipes</Link>)
                  : ""
              }
              
            </li>
            <li className="nav-item">
              {
                auth.isAuth ?
                  (<Link to="/add-recipe" className="nav-link px-lg-3" href="#" style={navStyle.navLink} onMouseLeave={e => navStyle.navLinkMouseLeave(e)} onMouseOver={(e) => navStyle.navLinkMouseOver(e)} >Add recipe</Link>)
                  : ""
              }

            </li>
          </ul>
          {
            auth.isAuth ?
              <ul className="navbar-nav mb-2 mb-lg-0" style={{ ...navStyle.navbarSupportedContent_2, justifyContent: "flex-end" }}>
                <li className="nav-item">
                  <span className="nav-link px-lg-3" style={{ color: "#fff" }}>{auth.user.name}</span>
                </li>
                <li className="nav-item">
                  <button onClick={() => logOut()} className="btn btn-danger">Logout</button>
                </li>
              </ul>
              :
              <ul className="navbar-nav mb-2 mb-lg-0" style={{ ...navStyle.navbarSupportedContent_2, justifyContent: "flex-end" }}>
                <li className="nav-item">
                  <Link to="/login" className="nav-link px-lg-3" href="#" style={navStyle.navLink} onMouseLeave={e => navStyle.navLinkMouseLeave(e)} onMouseOver={(e) => navStyle.navLinkMouseOver(e)}>Login</Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link px-lg-3" href="#" style={navStyle.navLink} onMouseLeave={e => navStyle.navLinkMouseLeave(e)} onMouseOver={(e) => navStyle.navLinkMouseOver(e)}>register</Link>
                </li>
              </ul>
          }
        </div>
      </div>
    </nav>
  )
}

export default Nav
const navStyle = {
  navNavbar: { "fontSize": "110%", "textTransform": "uppercase", "fontWeight": "600", "letterSpacing": "1.1px", "background": "linear-gradient(to top, #F27121, #E94057, #8A2387)", "borderRadius": "7px" },
  navbar_collapseCollapseShow: { transition: ".4s" },
  navbarSupportedContent_1: { flex: "3" },
  navbarSupportedContent_2: { flex: "1" },
  navItemActive: { color: "#fff", textShadow: "0 0 4px#fff" },
  navLink: { color: "rgba(255,255,255, .8)" },
  navLinkMouseOver: function (e) {
    e.target.style.transition = ".2s";
    e.target.style.color = this.navItemActive.color
    e.target.style.textShadow = this.navItemActive.textShadow
  },
  navLinkMouseLeave: function (e) {
    e.target.style.transition = ".2s";
    e.target.style.color = this.navLink.color
    e.target.style.textShadow = ''
  }
}