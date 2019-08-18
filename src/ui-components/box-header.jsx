import React from 'react'

export default function BoxHeader({
  title, titlePadding, fontSize, colStart=1, colEnd
}) {
  return (
    <div className="box-header">
      <h1 className="title-header"
        style={{
          padding: titlePadding,
          gridColumnStart: colStart,
          gridColumnEnd: colEnd,
          fontSize: fontSize
        }}>
        {title}</h1>
    </div>
  )
}