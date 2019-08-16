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
      <BoxHeader title='RPG Quest' />
      <BoxSidebar sectionHeader='Player'
        imgSrc='/images/player-m-02.png'
        imgAlt='A brave warrior' />
      <ActionButton linkRoute='/battle' linkName='Battle' />
      <ActionButton linkRoute='/profile' linkName='Character' />
      <ActionButton linkRoute='/' linkName='Map' />
      <ActionButton linkRoute='/' linkName='Castle' />
    </div>
  )
}