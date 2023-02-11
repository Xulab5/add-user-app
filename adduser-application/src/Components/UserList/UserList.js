import React from "react";
import User from "../User/User";
import Card from "../UI/Card/Card"

import "./UserList.css"

const UserList =(props)=>{


    return(
        <Card>
            <ul className="users">
                {props.list.length == 0 ? <li className="user__no-user">No User</li>:                
                    props.list.map( item =>(
                        <User
                            key = {item.id}
                            id = {item.id}
                            username= {item.username}
                            age = {item.age}
                        />
                    ))             
                }
            </ul>
        </Card>
    )
};

export default UserList;