// const { createContext, useReducer } = require("react");
"use client";
import { createContext, useReducer } from "react";
import userReducer from "./reducer";
import { useEffect } from "react";
import { setUser } from "./action";
// import WithAuthGaurd from "@/hocs/WithAuthGaurd";
// const { default: userReducer } = require("./reducer");

const intialState = {
  email: null,
  name: null,
  role: null,
  id: null,
};
export const UserContext = createContext(intialState);

const UserContextProvider = ({ children, ...rest }) => {
  console.log("🚀 ~ file: context.js:19 ~ UserContextProvider ~ rest:", rest);
  const [state, dispatch] = useReducer(userReducer, intialState);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (rest.isAuthenticated && user) {
      dispatch(setUser(user));
    }
  }, []);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
//  export default WithAuthGaurd(UserContextProvider);
