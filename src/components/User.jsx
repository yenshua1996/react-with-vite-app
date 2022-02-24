import "./User.css";

const User = ({ user }) => {
  return (
    <div className="card">
      <div className="card-heading">
        <h4 className="card-name">{user.name}</h4>
        <p className="card-email">{user.email}</p>
      </div>
    </div>
  );
};

export default User;
