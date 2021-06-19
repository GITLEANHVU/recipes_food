import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [auth, setAuth] = useState({
    isAuth: localStorage.getItem('isAuth') === null ?
      false : localStorage.getItem('isAuth'),
    user: JSON.parse(localStorage.getItem('user')) === null ?
      { id: "" } : JSON.parse(localStorage.getItem('user')),
  });

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {props.children}
    </AuthContext.Provider>
  )
}