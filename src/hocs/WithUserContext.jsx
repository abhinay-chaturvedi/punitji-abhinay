import UserContextProvider from "@/contexts/user/context";
import React, { useEffect } from "react";

const WithUserContext = (NavBar) => {
  return function HOC(props) {
    useEffect(() => {}, []);
    return (
      <UserContextProvider>
        <NavBar {...props} />
      </UserContextProvider>
    );
  };
};

export default WithUserContext;
