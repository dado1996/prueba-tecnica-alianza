import { useState, createContext } from "react";

export const AuthContext = createContext({
  user: null,
});

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);

  const login = (data) => {
    setAuth({ ...data });
  }

  const logout = () => {
    setAuth(null);
  }

  const valueContext = {
    auth,
    login,
    logout,
  }
  return (
    <AuthContext.Provider value={valueContext}>
      {children}
    </AuthContext.Provider>
  );
}