import "./Heading.css";
import { FaRegCompass } from "react-icons/fa";

const Heading = () => {
  return (
    <header className="header-container">
      <div className="head-container">
        <h1 className="main-title ">
          <span className="span-icon">
            <FaRegCompass />
          </span>
          Vite Simple Project
        </h1>

        <p className="main-subtitle">
          Please try to use vite for fast and easy build tool use.
        </p>
      </div>
    </header>
  );
};

export default Heading;
