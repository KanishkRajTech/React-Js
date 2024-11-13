import React,{useContext} from "react";
import UserContex from "../Contex/UserContex";
function Profile() {

    const {user} = useContext(UserContex)

    if(!user) return <div>Please Login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile