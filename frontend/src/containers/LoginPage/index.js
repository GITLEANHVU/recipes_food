import React from 'react'

export default function LoginPage() {
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
        <form>
          <h1 className="h2 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
          <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
        </form>
      </div>
    </div>
  )
}
