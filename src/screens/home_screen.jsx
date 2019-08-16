import React from 'react'

import './screen.css'

export default function HomeScreen() {
  return (
    <div className="screen home-screen">
      <h1 className="header_screen">Home Screen</h1>

      <div className='buttons-container'>
        <a className="action-btn" href="/battle">Battle</a>
        <a className="action-btn" href="/profile">Profile</a>
      </div>
    </div>
  )
}