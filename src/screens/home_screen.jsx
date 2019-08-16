import React from 'react'

//import ui components
import BoxHeader from '../ui-components/box-header'
import BoxSidebar from '../ui-components/box-sidebar'
import ActionButton from '../ui-components/action-btn'
//import styles
import './screen.css'

export default function HomeScreen() {
  return (
    <div className="grid home-grid">
      <div className="HUD" style={{
        position: 'absolute',
        top: '.5em',
        left: '1em',
        display: 'flex',
        alignItems: 'center',
      }}>
        <span className="circle" style={{
          height: '5em',
          width: '5em',
          color: 'red',
          background: '#333',
          borderRadius: '100%',
          border: '3px solid gold',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2,
        }}>Face</span>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginLeft: '-.14em'
        }}>
          <span className="HUD-healthbar" style={{
            height: '.8em',
            width: '10em',
            background: '#DC0000',
            borderTopRightRadius: '5px',
            border: '1px solid gold',
          }} />
          <span className="HUD-manabar" style={{
            width: '10em',
            height: '.8em',
            background: 'blue',
            borderBottomRightRadius: '5px',
            border: '1px solid gold',
          }} />
        </div>
      </div>

      <BoxHeader title='RPGQuest' />
      <BoxSidebar sectionHeader=''
        imgSrc='/images/player-m-02.png'
        imgAlt='A brave warrior' />
      <ActionButton lineHeight='4em' linkRoute='/battle' linkName='Battle' />
      <ActionButton lineHeight='4em' linkRoute='/profile' linkName='Character' />
      <ActionButton lineHeight='4em' linkRoute='/' linkName='Shop' />
      <ActionButton lineHeight='4em' linkRoute='/' linkName='Castle' />
    </div>
  )
}