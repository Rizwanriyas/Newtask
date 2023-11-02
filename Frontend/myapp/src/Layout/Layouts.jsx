import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Login from '../Components/Login'
import Register from '../Components/Register'
import Addproduct from '../Components/Addproduct'
import Home from '../Components/Home'
import Update from '../Components/Update'
function Layouts() {
  return (
   <Router>

    <Routes>
         <Route path='/' element={<Login/>}/> 
        <Route path='/register' element={<Register/>}/>
        <Route path='/add' element={<Addproduct/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/edit/:id' element={<Update/>}/>
    </Routes>
   </Router>
  )
}

export default Layouts