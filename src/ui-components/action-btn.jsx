import React from 'react'

export default function ActionButton({
  linkRoute, linkName, fontSize
}) {
  return (
    <div className="box-btn">
      <div className="container btn-container">
        <a href={linkRoute} className="action-btn"
          style={{ fontSize: fontSize }}>
          {linkName}
        </a>
      </div>
    </div>
  )
}