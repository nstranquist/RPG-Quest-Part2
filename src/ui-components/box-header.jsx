import React from 'react'

export default function BoxHeader({
  title, titlePadding, colStart, colEnd
}) {
  return (
    <div className="box-header">
      <h1 className="title-header"
        style={{
          padding: titlePadding,
          gridColumnStart: colStart,
          gridColumnEnd: colEnd
        }}>
        {title}</h1>
    </div>
  )
}