import React from 'react'

//import ui components
import BoxHeader from '../ui-components/box-header'
import BoxSidebar from '../ui-components/box-sidebar'
import ActionButton from '../ui-components/action-btn'
//import styles
import './screen.css'

export default function HomeScreen() {
  return (
    <div className="grid battle-grid">
      <BoxHeader title='Battle'
        titlePadding='0 1.3em 0 .25em 0'
        colStart='2' colEnd='3' />
      <BoxSidebar sectionHeader='Player'
        imgSrc='/images/player-m-02.png'
        imgAlt='A brave warrior' />
      <div style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        gridColumnStart: 2,
        gridColumnEnd: 3,
        gridRowStart: 3,
        gridRowEnd: 6,
      }}>
        <ActionButton fontSize='1.3em' linkName="Attack" linkRoute='/' />
        <ActionButton fontSize='1.3em' linkName="Items" linkRoute='/' />
        <ActionButton fontSize='1.3em' linkName="Weapons" linkRoute='/' />
        <ActionButton fontSize='1.3em' linkName="Pets" linkRoute='/' />
        <ActionButton fontSize='1.3em' linkName="Flee" linkRoute='/' />
      </div>
      <BoxSidebar sectionHeader='Monster'
        imgSrc='/images/monster-01.png'
        imgAlt='A frightening monster'
        direction='right' />
    </div>
  )
}