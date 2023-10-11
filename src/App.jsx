
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Layout from "./components/Layout";
import Lenta from "./components/Lenta/Lenta";
import Login from "./components/Login/Login";
import Saved from "./components/Saved/Saved";
import Help from "./components/Help/Help";
import Settings from "./components/Settings/Settings";
import Messages from "./components/Messages/Messages";
import Register from "./components/Register/Register";
import LentaImageContent from "./components/Lenta/LentaImageContent/LentaImageContent";


function App() {
  return (
    <>
      <Layout>

        <div className="content">
          <Routes>
            <Route path="/" element={<Lenta />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Saved" element={<Saved />} />
            <Route path="/Help" element={<Help />} />z
            <Route path="/Settings" element={<Settings />} />
            <Route path="/Messages" element={<Messages />} />
            <Route path="/register" element={<Register />} />
            <Route path='/lentaimg' element={<LentaImageContent/>}/>

          </Routes>
        </div>
      </Layout>

    </>
  );
}

export default App;
