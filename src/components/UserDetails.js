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

      if (loading) return <p>Loading...</p>; 
      if (!currentUser) return <p>User not found.</p>;

    return(
        <>
        <p>Name: {currentUser.name}</p>
        <p>Username: {currentUser.username}</p>
        <p>Email: {currentUser.email}</p>
        <p>Phone: {currentUser.phone}</p>
        <p>Website: {currentUser.website}</p>
        </>
    )
}

export default UserDetails;