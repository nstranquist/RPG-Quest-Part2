import React from 'react'

export default function ActionButton({
  linkRoute, linkName, lineHeight, margin, backgroundImage, backgroundSize, onClick
}) {
  return (
    <div className="box-btn" style={{
      margin: margin,
      backgroundImage: backgroundImage,
    }}>
      <div className="container btn-container" style={{
        backgroundSize: backgroundSize,
      }}>
        <a href={linkRoute} className="action-btn"
          style={{
            lineHeight: lineHeight, userSelect: 'none', MozUserSelect: 'none'
          }}
          onClick={onClick}>
          {linkName}
        </a>
      </div>
    </div>
  )
}