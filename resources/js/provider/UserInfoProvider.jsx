import React,{createContext, useState, useContext} from "react";

export const userInfoContext = createContext("");
export const setUserInfoContext = createContext(() => undefined);

export const UserInfoProvider = (props) => {
    const {children} = props;
    const [userInfo, setUserInfo] = useState("");
    
    return (
        <userInfoContext.Provider value={userInfo}>
            <setUserInfoContext.Provider value={setUserInfo}>
                {children}
            </setUserInfoContext.Provider>
        </userInfoContext.Provider>
        )
}