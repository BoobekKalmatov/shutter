import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Layout from "./components/Layout";

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <>
      <Layout>
        <div className="content">
          <Routes>
            <Route path="/navigation" element={<Navigation />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Layout>

      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
