import React from 'react'
import { Link } from 'react-router-dom'

const Navigator = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/battle'>Battle</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
      </ul>
    </nav>
  </header>
)

export default Navigator;