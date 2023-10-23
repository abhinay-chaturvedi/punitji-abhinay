'use client'
import Cookies from "js-cookie"
import { useEffect } from "react";
import { useState } from "react";


export const useLogin = () => {
    const [loginUser, setLoginUser] = useState(null);
    let User;
    if(!Cookies.get("User")) {
        User = null;
    }
    else User = JSON.parse(Cookies.get("User"));
    useEffect(() => {
        setLoginUser(User);
    }, [])
    return loginUser;
}

export const setLogin = (User) => {
    return Cookies.set("User", JSON.stringify(User), {expires: 7});
}
export const useLogout = () => {
    const logout = () => {
        Cookies.remove("User");
    }
    return logout;
}
