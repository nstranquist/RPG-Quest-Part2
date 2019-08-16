import React from 'react'

export default function BoxSidebar({
  sectionHeader, imgSrc, imgAlt, direction = 'left'
}) {
  return (
    <div className={'box-sidebar-' + direction}>
      <div className="container sidebar">
        <div className="section-header">{sectionHeader}</div>
        <img src={imgSrc} alt={imgAlt}
          className="img-fluid" />
      </div>
    </div>
  )
}