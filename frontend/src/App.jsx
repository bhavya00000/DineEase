import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Success from './Pages/Success/Success';
import NewMenu from './Pages/NewMenu/NewMenu';
import './App.css'
import Signup from './components/Signup';
import Login from './components/Login';
import Main from './components/Main';


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/success' element={<Success/>}/>
          <Route path="/signup" exact element={<Signup />} />
			    <Route path="/login" exact element={<Login />} />
          <Route path='*' element={<NotFound/>}/>
          <Route path="/after" exact element={<Main />} />
          <Route path="/NewMenu" exact element={<NewMenu />} />
          {/* <Route path="/" element={<Navigate replace to="/login" />} /> */}
        </Routes>
        <Toaster />
      </Router>
    </>
  );
}

export default App;
