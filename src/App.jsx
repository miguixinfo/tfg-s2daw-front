import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Error from './components/Error';
import Navbar from './components/Navbar';
import Users from './components/Users/Users';
import Login from './components/Security/Login';
import Register from './components/Security/Register';
import Footer from './components/Footer';
import Home from './Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" exact element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
