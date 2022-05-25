import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './navbar.module.css';

const Navbar = () => {
  return (
   <div>
       <nav className={style.nav}>
          <NavLink to="/" className={style.navLink}>Home</NavLink>
          <NavLink to="/add-blog" className={style.navLink}>AddBlog</NavLink>
          <NavLink to="/contact" className={style.navLink}>Contact</NavLink>
       </nav>
   </div>

  )
}

export default Navbar