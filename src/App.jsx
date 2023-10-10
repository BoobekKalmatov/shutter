
import {Route, Routes} from 'react-router-dom'
import './App.css';
import Lenta from './components/Lenta/Lenta';
import Login from './components/Login/Login';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Register from './components/Register/Register';

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
          <Routes>
            <Route path="/" element={<Navigation />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
      </Layout>


      <Routes>
        <Route path='/' element={<Navigation/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/lenta' element={<Lenta/>}/>
      </Routes>

    </>
  );
}

export default App;
