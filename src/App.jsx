import {Route, Routes} from 'react-router-dom'
import './App.css';
import Login from './components/Login/Login';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Register from './components/Register/Register';

function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Navigation/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>

    </>
  );
}

export default App;
