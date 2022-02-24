import Navbar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import MainRoute from "./components/Routes/MainRoute";
import UserRoute from "./components/Routes/UserRoute";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Navbar />

      <Routes>
        <Route path="/" element={<MainRoute />} />
        <Route path="/users" element={<UserRoute />} />
      </Routes>
    </div>
  );
}

export default App;
