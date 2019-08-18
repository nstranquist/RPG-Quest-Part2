import React from 'react';

export default function CastleScreen({
  toggleCastleScreen
}) {
  return (
    <div className="grid castle-grid" style={{ color: 'white', textAlign: 'center', fontSize: '2em' }}>
      Castle Screen
      <br />
      <a onClick={() => { toggleCastleScreen({ 'screenName': 'castle' }) }} style={{ color: 'white' }}>
        Back</a>
    </div>
  );
}