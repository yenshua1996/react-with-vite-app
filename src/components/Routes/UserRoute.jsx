import { useEffect, useState } from "react";
import User from "../User";
import "./UserRoute.css";

const UserRoute = () => {
  const [users, setUsers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const users = await response.json();

      console.log(users);

      setUsers(users);
    };

    fetchUsers();
  }, []);

  return (
    <>
      <div className="card-grid">
        {!users.length && <h4>Loading!</h4>}
        {users.map((user) => (
          <User user={user} key={user.id} />
        ))}
      </div>
    </>
  );
};

export default UserRoute;
