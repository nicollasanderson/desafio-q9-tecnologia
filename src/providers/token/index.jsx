import { createContext, useContext, useState } from "react";

const TokenContext = createContext("");

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(
    window.localStorage.getItem("@q9pets:token") || false
  );

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export const UseTokenProvider = () => useContext(TokenContext);
