import React from 'react'

export default function BoxSidebar({
  sectionHeader, imgSrc, imgAlt, direction = 'left', headerDisplay
}) {
  return (
    <div className={'box-sidebar box-sidebar-' + direction}>
      <div className="container sidebar">
        <div className="section-header" style={{ display: headerDisplay }}>{sectionHeader}</div>
        <img src={imgSrc} alt={imgAlt}
          className="img-fluid" />
      </div>
    </div>
  )
}