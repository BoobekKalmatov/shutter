import {Route, Routes} from 'react-router-dom'
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <>

      
      <Routes>

        <Route path='/' element={<Navigation/>}/>
        <Route path='/profile' element={<Profile/>}/>

      </Routes>

    </>
  );
}

export default App;
