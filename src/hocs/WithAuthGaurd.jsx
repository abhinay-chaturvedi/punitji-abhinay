
// import { Component } from "react"

import { cookies } from "next/headers";

export default function WithAuthGaurd(ChildComponent) {
  return function EnhancedComponent(props) {
    // here we check the if the user is authenticated or not ;
    const tokenObj = cookies().get("token");
    
    // console.log("hello from the with auth gaurd", tokenObj);
    let isAuthenticated = false;
    if (!tokenObj || !tokenObj.value) {
      console.log("user not authenticated");
      isAuthenticated = false;
    } else {
      // console.log("user is authicated", tokenObj.value);
      isAuthenticated = true;
    }
    return <ChildComponent {...props} isAuthenticated={isAuthenticated} ></ChildComponent>;
    // return <ChildComponent/>
  };
}
