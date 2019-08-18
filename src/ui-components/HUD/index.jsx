import React from 'react'

import './HUD.css'

export default function HUD({
  leftOrRight
}) {
  return (
    <div className={"HUD HUD-" + leftOrRight} >
      <span className="circle">
        Face
      </span>
      <div className="statbars">
        <span className="HUD-bar healthbar"/>
        <span className="HUD-bar manabar"/>
      </div>
    </div>
  )
}