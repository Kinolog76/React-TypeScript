import { useState, useEffect } from "react";
import UserCard from "../components/UserCard";
import { IUsers } from "../interfaces";

function UserBox() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .catch((error) => console.error("error", error));
  }, []);
  
  return (
    <>
      <div className="users-box">
        {users.map((user: IUsers) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </>
  );
}

export default UserBox;
