import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateUsers from './pages/CreateUsers';
import UpdateUser from './pages/UpdateUser';
import Users from './pages/Users';

function App() {

  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Users/>}>Home</Route>
    <Route path="/create" element={<CreateUsers/>}>Create</Route>
    <Route path='/update/:id' element={<UpdateUser/>}>Update</Route>
   </Routes>
   </BrowserRouter>
  
    </>
  )
}

export default App
