import React from 'react';

export default function BoxMessageBoard({
  boardTitle='Message Board', message, margin='1em', padding='.3em'
}) {
  return (
    <div className="box_message-board" style={{
      gridColumnStart: 2,
      gridColumnEnd: 4,
      padding: padding,
      margin: margin,
      marginTop: 0,
      background: '#896C42',
      color: '#f7f7f7 ',
      border: '.25em solid #563E26',
    }}>
      <div className="message-board" style={{
        width: '100%', textAlign: 'center'
      }}>
        <h3 style={{
          fontWeight: 400, letterSpacing: '5px', fontSize: '1.5em', lineHeight: '1.5em',
        }}>{boardTitle}</h3>
        <p style={{ letterSpacing: '1.5px' }}>{message}</p>
      </div>
    </div>
  )
}