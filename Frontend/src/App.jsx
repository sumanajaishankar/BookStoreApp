import React from 'react'
import Home from "./home/Home";
import {Routes,Route} from "react-router-dom";
import Courses from './courses/Courses';
import Signup from './components/Signup';
import Contact from './Contact/Contact';
import Abouts from './about/Abouts';



function App() {
  return (
  <>
  <div className='dark:bg-slate-900 dark:text-white'>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path="/Course" element={<Courses/>}></Route>
    <Route path="/Signup" element={<Signup/>}></Route>
    <Route path="/Contacts" element={<Contact/>}></Route>
    <Route path="/About"  element={<Abouts/>}></Route>

    
  </Routes>
  </div>
  
  
    </>
  )
}

export default App