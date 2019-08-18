import React from 'react';

export default class CastleScreen extends React.Component {
  render() {
    return (
      <div className="grid castle-grid" style={{ color: 'white', textAlign: 'center', fontSize:'2em' }}>
        Castle Screen
        <br /><a href="/home" style={{ color: 'white' }}>Back</a>
      </div>
    );
  }
}