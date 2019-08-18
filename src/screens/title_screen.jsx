import React from 'react'
import BoxHeader from '../ui-components/box-header'
import BoxMessageButton from '../ui-components/btn-messageBtn'

export default function TitleScreen({
  toggleScreen
}) {

  const toggleOverlay = () => {
    document.querySelector('.screen-overlay').style.display = 'none';
    document.querySelector('.title-screen-ui').style.zIndex = '1';
    toggleAudio()
  }

  const toggleAudio = () => {
    document.getElementById('title_music').play();
  }

  return (
    <div className="title-screen" style={{
      position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%', zIndex: 1000
    }}>
      <div className="screen-overlay" onClick={toggleOverlay} style={{
        display: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,.5)',
        width: '100%',
        height: '100%',
        cursor: 'pointer',
        color: 'rgba(255,255,255,.8)',
        fontSize: '3em',
        zIndex: 999
      }} >
        <img src="/images/play.png" alt="click to play game" style={{
          display: 'block',
          margin: '0 auto',
          height: '7em',
          opacity: '.9',
          paddingTop: '23.5%'
        }} />
        <div style={{ position: 'absolute', bottom: '2.2em', left: '50%', transform: 'translateX(-50%)' }}>
          Click Anywhere
          </div>
      </div>
      <div className='title-screen-ui' onClick={toggleAudio} style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: '-1',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'
      }}>
        <BoxHeader title='RPG Quest' fontSize='3em' style={{ display: 'absolute', top: '1em' }} />
        <div>
          <BoxMessageButton handleOnClick={() => toggleScreen({ 'screenName': 'home' })} buttonName='Start Game' />
          <BoxMessageButton buttonName='Credits' />
        </div>
      </div >
    </div >
  );
}

/*const overlayStyle = {
  display: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(0,0,0,.5)',
  width: '100%',
  height: '100%',
  cursor: 'pointer',
  color: 'rgba(255,255,255,.8)',
  fontSize: '3em',
}*/

// cool flex: add pulsing animation to title and subtitle in rythm with background music