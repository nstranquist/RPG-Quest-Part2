import React from 'react'

export default function BoxHeader({
  title, titlePadding
}) {
  return (
    <div className="box-header">
      <h1 className="title-header"
        style={{padding: titlePadding}}>
        {title}</h1>
    </div>
  )
}