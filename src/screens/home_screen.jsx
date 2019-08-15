import React from 'react'

import './screen.css'

export default function HomeScreen() {
  return (
    <div>
      <h1>Home Screen</h1>
      <div className='buttons-container'>
        <a href="/battle">Battle</a>
        <a href="/profile">Profile</a>
      </div>
    </div>
  )
}