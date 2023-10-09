import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Layout from "./components/Layout";

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
    </>
  );
}

export default App;
