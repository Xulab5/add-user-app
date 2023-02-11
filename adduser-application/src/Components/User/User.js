import React from "react";

import "./User.css";

const User = (props)=>{
    return (
        <li className="user__item"> <span className="user__username">{props.username}</span> <span className="user__age">({props.age} years old)</span> </li>
    )
};
export default User;