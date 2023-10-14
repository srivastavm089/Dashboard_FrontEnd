import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { Route,Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Update from './components/Update';
import Delete from './components/Delete';
import Logout from './components/Logout';
import Profile from './components/Profile';
import Home from './components/Home';
import Add from './components/Add';
import SignUp from './components/SignUp';
import PrivateComp from './components/PrivateComp';
import Login from './components/Login';
function App() {
  return (
   <>
   <Nav/>
   <Routes>
   <Route element={<PrivateComp/>}>
    <Route path='/' element={<Home/>}/>
    <Route path='/add' element={<Add/>}/>
    <Route path='/update' element={<Update/>}/>
    <Route path='/delete' element={<Delete/>}/>
    <Route path='/logout' element={<Logout/>}/>
    <Route path='/profile' element={<Profile/>}/>
    </Route>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/login' element={<Login/>}/>
   </Routes>
   <Footer/>
   </>
  );
}

export default App;
