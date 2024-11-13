import React from "react";
import UserContex from "./UserContex";

const UserContexProvider = ({children}) =>{
    const [user, setUser] = React.useState(null)
    return(
        <UserContex.Provider value={{user, setUser}}>
        {children}
        </UserContex.Provider>
    )
}

export default UserContexProvider