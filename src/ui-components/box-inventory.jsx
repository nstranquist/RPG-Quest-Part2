import React from 'react';

export default function InventoryBox({
  playerName, playerStats
}) {
  return (
    <div className='top-inventory' style={{
      position: 'absolute',
      top: '1em', left: '1em',
      width: '10em', height: 'auto'
    }}>
      <div style={{
        position: 'relative', width: '100%', height: '100%', border: '1px solid red', color: 'white',
        background: '#333', padding: '0 .2em .2em .2em'
      }}>
        <div style={{ textAlign: 'center' }}>{playerName}</div>
        <div>Lvl: <span style={{ float: 'right' }}>{playerStats.lvl + 1}</span></div>
        <div>xp: <span style={{ float: 'right' }}>{playerStats.xp}</span></div>
        <div>gold: <span style={{ float: 'right' }}>{playerStats.gold}</span></div>
      </div>
    </div>
  );
}