import React from 'react';

export default function BoxMessageBoard({
  message
}) {
  return (
    <div className="box_message-board" style={{
      gridColumnStart: 2,
      gridColumnEnd: 4,
      padding: '.3em',
      margin: '1em',
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
        }}>Message Board</h3>
        <p style={{ letterSpacing: '1.5px' }}>{message}</p>
      </div>
    </div>
  )
}