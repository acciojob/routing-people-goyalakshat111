import React, { useState,useEffect } from "react";
import { useParams} from "react-router-dom";

const UserDetails = ({users,loading})=>{
    const [currentUser,setCurrentUser] = useState(null);
    const {id} = useParams();

    useEffect(() => {
       if(users.length>0){
        const user = users.find((user) => user.id === +id);
            setCurrentUser(user);
       }
      }, [id, users]);

      if (loading) return <div>Loading...</div>; 
      if (!currentUser) return <p>User not found.</p>;

    return(
        <>
        <p><b>Name:</b> {currentUser.name}</p>
        <p><b>Username:</b> {currentUser.username}</p>
        <p><b>Email:</b> {currentUser.email}</p>
        <p><b>Phone:</b> {currentUser.phone}</p>
        <p><b>Website:</b> {currentUser.website}</p>
        </>
    )
}

export default UserDetails;