import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ViewUser.css";

const ViewUser = () => {
  const [user, setUser] = useState({});
  const [isUserLoaded, setIsUserLoaded] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${params.id}`
      );

      if (response.ok) {
        setIsUserLoaded(!isUserLoaded);
      }

      const data = await response.json();

      setUser(data);
    };

    fetchUserData();
  }, []);

  console.log(user);

  return (
    <>
      {isUserLoaded && <p>Fetching User Data!</p>}

      <div className="user-container">
        <div className="user-heading">
          <h1 className="user-name">{user.name}</h1>
          <p className="user-email">{user.email}</p>
          <p className="user-website">{user.website}</p>
          <p className="user-phone">{user.phone}</p>
        </div>
      </div>
    </>
  );
};

export default ViewUser;
