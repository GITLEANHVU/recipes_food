import { createContext, useEffect, useState } from "react";

export const HeaderContext = createContext();

export function HeaderProvider({ children }) {

  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("account"));
    setAuth(user);
  }, []);

  const data = { auth, setAuth };

  return (
    <HeaderContext.Provider value={data}>
      {children}
    </HeaderContext.Provider>
  );
}