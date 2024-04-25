import React from 'react'
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav>
  <ul>
    <li>
 <NavLink to="/">Home</NavLink>
</li>
<li>
 <NavLink to="/Show">ShowData</NavLink>
</li>
  </ul>
  </nav>
  )
}

export default Header
