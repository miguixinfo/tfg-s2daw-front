import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Error from './components/Error';
import Navbar from './components/Navbar';
import Users from './components/Users/Users';
import Login from './components/Security/Login';
import Register from './components/Security/Register';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/usuarios" element={<Users />} />
        <Route path="*" exact element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
