import React from 'react';

export default function CastleScreen({
  toggleScreen
}) {
  return (
    <div className="grid castle-grid" style={{ color: 'white', textAlign: 'center', fontSize: '2em' }}>
      Castle Screen
      <br />
      <a onClick={() => { toggleScreen({ 'screenName': 'home' }) }} style={{ color: 'white' }}>
        Back</a>
    </div>
  );
}