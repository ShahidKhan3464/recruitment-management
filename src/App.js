import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';
import Create from './components/recruitment/Create';
import './App.css';

const App = () => {

  return (
    <div className="container">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/createRecruitment' element={<Create />} />
      </Routes>
    </div>
  )
}

export default App;