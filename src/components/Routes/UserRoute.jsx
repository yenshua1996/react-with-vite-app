import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

      setUsers(users);
    };

    fetchUsers();
  }, []);

  return (
    <>
      <div className="card-grid">
        {!users.length && <h4>Loading!</h4>}
        {users.map((user) => (
          <Link
            to={`/user/${user.id}`}
            style={{ textDecoration: "none", color: "#444" }}
            key={user.id}
          >
            <User user={user} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default UserRoute;
