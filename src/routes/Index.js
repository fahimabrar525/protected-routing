import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddBlog from '../pages/AddBlog'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Error from '../pages/Error'
import Navbar from '../layout/Navbar'
import Protected from './Protected'

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
    
    <Navbar />

    {isLoggedIn ? (<button onClick={()=>{
      setIsLoggedIn(!isLoggedIn)
    }}>Logout</button>
    ) : (
      <button onClick={()=>{
        setIsLoggedIn(!isLoggedIn)
      }}>Login</button>
    )}
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/add-blog" element={
            <Protected isLoggedIn={isLoggedIn}>
              <AddBlog />
            </Protected>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Index