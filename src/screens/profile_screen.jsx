import React from 'react'

//import ui components
import BoxHeader from '../ui-components/box-header'
import BoxSidebar from '../ui-components/box-sidebar'
import ActionButton from '../ui-components/action-btn'
//import styles
import './screen.css'

const lineHeight = '2em';
const backgroundSize = '100% 200%';
const margin = '0 0 .5em 0';

export default function ProfileScreen() {
  return (
    <div className="grid profile-grid">
      <BoxHeader title='Character' />
      <BoxSidebar headerDisplay='none' direction='center'
        imgSrc='/images/player-m-02.png'
        imgAlt='A brave warrior' />
      <div>
        <ActionButton lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} linkName="Head" linkRoute='/home' />
        <ActionButton lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} linkName="Chest" linkRoute='/home' />
        <ActionButton lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} linkName="Arms" linkRoute='/home' />
        <ActionButton lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} linkName="Legs" linkRoute='/home' />
        <ActionButton lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} linkName="Feet" linkRoute='/home' />
      </div>
      <div>
        <ActionButton lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} linkName="Strength" linkRoute='/home' />
        <ActionButton lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} linkName="Dexterity" linkRoute='/home' />
        <ActionButton lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} linkName="Intelligence" linkRoute='/home' />
        <ActionButton lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} linkName="Charisma" linkRoute='/home' />
        <ActionButton lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} linkName="Luck" linkRoute='/home' />
      </div>
    </div>
  )
}