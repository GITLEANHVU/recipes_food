import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [auth, setAuth] = useState({
    isAuth: true,
    user: { id: 1, name: 'leanhvu' }
  });
  return (
      <AuthContext.Provider value={[auth, setAuth]}>
      {props.children}
      </AuthContext.Provider>
  )
}