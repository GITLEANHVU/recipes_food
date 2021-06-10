import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [auth, setAuth] = useState({
    isAuth: false,
    user: {
      id: "1",
      name: "Lê Anh Vũ",
      email: "lav@gmail.com",
      password: "1412",
      address: "Nguyên Hà, Sơn Nguyên Sơn Hòa Phú Yên",
      role: "user",
      status: 1,
      created_at: "",
      updated_at: ""
    }
  });
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {props.children}
    </AuthContext.Provider>
  )
}