import Navbar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import MainRoute from "./components/Routes/MainRoute";
import UserRoute from "./components/Routes/UserRoute";
import ViewUser from "./components/Routes/ViewUser";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Navbar />

      {/* Routes View */}
      <Routes>
        <Route path="/" element={<MainRoute />} />
        <Route path="/users" element={<UserRoute />} />
        <Route path="/user/:id" element={<ViewUser />} />
      </Routes>
    </div>
  );
}

export default App;
