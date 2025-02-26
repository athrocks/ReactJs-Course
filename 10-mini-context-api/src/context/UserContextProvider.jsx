import React, { useState } from "react";
import UserContext from "./UserContext";

// children are the children tags like div , h1 which would have been passed inside <UserContextProvider> check App.jsx
// Similar to <Outlet> in 09-react-router
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
