import React, { useEffect, useState } from "react";
import "regenerator-runtime/runtime";
import axios from "axios";
import "./../styles/App.css";
import { Route, Routes } from "react-router-dom";

import UserDetails from "./UserDetails";
import UserList from "./UserList";

const App = () => {
  let [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getUsers() {
    try {
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.log("Failed to fetch users", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="" element={<UserList users={users} />} />
        <Route path="/users/:id" element={<UserDetails users={users} loading={loading} />} />
      </Routes>
    </div>
  );
};

export default App;
