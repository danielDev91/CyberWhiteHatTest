import {Routes, Route} from 'react-router-dom';
import Register from './components/register/register'
import Login from './components/login/login'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Register></Register>}/>
      <Route path='/login' element={<Login/>} />
    </Routes>
  );
}

export default App
