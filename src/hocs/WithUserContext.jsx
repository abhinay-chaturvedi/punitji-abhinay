
import UserContextProvider from "@/contexts/user/context";
import React from "react";

const WithUserContext = (Component) => {
  return function HOC(props) {
    // useEffect(() => {}, []);
    return (
      <UserContextProvider>
        <Component {...props} />
      </UserContextProvider>
    );
  };
};

export default WithUserContext;
