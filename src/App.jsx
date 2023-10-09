<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Layout from "./components/Layout";
=======
import {Route, Routes} from 'react-router-dom'
import './App.css';
import Login from './components/Login/Login';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Register from './components/Register/Register';
>>>>>>> 32b1d68212e754fd5d8d5dc3abcb15512a3eaad5

function App() {
  return (
    <>
<<<<<<< HEAD
      <Layout>
        <div className="content">
          <Routes>
            <Route path="/navigation" element={<Navigation />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Layout>
=======

      <Routes>
        <Route path='/' element={<Navigation/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>

>>>>>>> 32b1d68212e754fd5d8d5dc3abcb15512a3eaad5
    </>
  );
}

export default App;
