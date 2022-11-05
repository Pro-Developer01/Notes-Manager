import React, { useState } from 'react';
import Navbar from '../src/components/Navbar/Navbar.js';
import Dashboard from '../src/components/Dashboard/Dashboard.js';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import UpdatePage from './components/Pages/UpdatePage.js';
import Footer from './components/Footer/Footer.js';
import BlackBox from './BlackBox/BlackBox.js';

export default function App() {
  const [IndexUpdate,setIndexUpdate]=useState();
  console.log('IndexUpdate',IndexUpdate);
  return (
    <div>
      <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<BlackBox/> }/>
        {/* <Route path='/' element={<Dashboard setIndexUpdate={setIndexUpdate} />}/>
        <Route path='/update' element={<UpdatePage IndexUpdate={IndexUpdate}/>}/> */}
      
      </Routes>
      {/* <Footer/> */}
      </BrowserRouter>
    </div>
  )
}
