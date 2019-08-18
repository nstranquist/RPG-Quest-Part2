import React from 'react';

export default class ShopScreen extends React.Component {
  render() {
    return (
      <div className="grid shop-grid" style={{ color: 'white', textAlign: 'center', fontSize: '2em' }}>
        Shop Screen
        <br /><a href="/home" style={{ color: 'white' }}>Back</a>
      </div>
    );
  }
}