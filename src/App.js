import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Orders from './components/Orders/Orders';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Vip from './components/Vip/Vip';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/vip' element={<Vip />}></Route>
        <Route path='/orders' element={
          <RequireAuth>
            <Orders />
          </RequireAuth>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
