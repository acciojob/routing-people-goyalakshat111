import React from "react";
import { Link } from "react-router-dom";

const UserList = ({users})=>{

    
    return(
        <>
        <h1>User List</h1>
        <ul>
        {
            users.map(user=>{
                return (
                   <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li> 
                )
            })
        }
        </ul>
        </>
    )
}

export default UserList;