import React from 'react';

export default function BoxMessageBtn({
  buttonName, handleOnClick, buttonRoute
}) {

  return (
    <div className="box_message-btn" style={{
      padding: '.5em',
      margin: '1em',
      marginTop: 0,
      background: '#896C42',
      border: '.25em solid #563E26',
      cursor: 'var(--cursor-pointer)'
    }}>
      <div className="message-btn" style={{
        width: '100%', textAlign: 'center',
      }}>
        <a onClick={handleOnClick} href={buttonRoute} style={{
          letterSpacing: '3px', color: '#f7f7f7', cursor: 'var(--cursor-pointer)'
        }}>
          {buttonName}
        </a>
      </div>
    </div>
  )
}