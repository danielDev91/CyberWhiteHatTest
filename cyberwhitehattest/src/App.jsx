import {Routes, Route} from 'react-router-dom';
import Register from './components/register/register';
import Login from './components/login/login';
import Pagetest from './components/pages/pagetest';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/register' element={<Register />}/>
      <Route path='/login' element={<Login />} />
      <Route path='/pagetest' element={<Pagetest/>}/>
    </Routes>
  );
}

export default App