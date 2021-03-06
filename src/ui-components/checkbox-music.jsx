import React from 'react'

export default function MusicCheckbox({
  toggleAudio, toggleMusicCheckbox
}) {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      right: 0,
      padding: '.3em',
      margin: '.3em'
    }} >
      <input id="music-input" type="checkbox" onChange={toggleAudio} />
      <span style={{ color: 'white', paddingLeft: '.3em', userSelect: 'none' }} onClick={toggleMusicCheckbox}>Mute</span>
    </div>
  );
}

