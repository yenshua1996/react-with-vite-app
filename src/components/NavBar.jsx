import "./NavBar.css";
import { Link } from "react-router-dom";
import { FaGooglePlus, FaHighlighter } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <h4>Project@Vite</h4>
      </div>

      <div className="nav-controller">
        <span className="nav-link">
          <FaGooglePlus />
          <Link to="/" className="route-link">
            Home
          </Link>
        </span>
        <span className="nav-link">
          <FaHighlighter />
          <Link to="/users" className="route-link">
            Users
          </Link>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
