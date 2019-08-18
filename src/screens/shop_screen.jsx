import React from 'react';

export default function ShopScreen({
  toggleShopScreen
}) {
  return (
    <div className="grid shop-grid" style={{ color: 'white', textAlign: 'center', fontSize: '2em' }}>
      Shop Screen
      <br />
      <a onClick={() => { toggleShopScreen({ 'screenName': 'shop' }) }} style={{ color: 'white' }}>
        Back</a>
    </div>
  );
}