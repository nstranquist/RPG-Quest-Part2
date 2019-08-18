import React from 'react';

export default function ShopScreen({
  toggleScreen
}) {
  return (
    <div className="grid shop-grid" style={{ color: 'white', textAlign: 'center', fontSize: '2em' }}>
      Shop Screen
      <br />
      <a onClick={() => { toggleScreen({ 'screenName': 'home' }) }} style={{ color: 'white' }}>
        Back</a>
    </div>
  );
}