import React from 'react'

//import ui components
import BoxHeader from '../ui-components/box-header'
import BoxSidebar from '../ui-components/box-sidebar'
import BoxMessageBoard from '../ui-components/box-messageboard'
import ActionButton from '../ui-components/action-btn'
//import styles
import './screen.css'
// style variables, refactor later
const lineHeight = '2em';
const backgroundSize = '100% 200%';
const margin = '0 0 .5em 0';

export default function ProfileScreen({
  toggleProfileScreen
}) {
  return (
    <div className="grid profile-grid">
      <div style={{
        postion: 'absolute', top: 0, right: 0, color: 'white', padding: '.2em', margin: '.2em'
      }} onClick={() => { toggleProfileScreen({ 'screenName': 'profile' }) }}>
        <a style={{ color: 'white' }}>Back</a>
      </div>
      <BoxHeader title='Character' />
      <BoxSidebar headerDisplay='none' direction='center'
        imgSrc='/images/player-m-02.png'
        imgAlt='A brave warrior' />
      <div>
        <ActionButton lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} linkName="Strength" />
        <ActionButton lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} linkName="Dexterity" />
        <ActionButton lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} linkName="Intelligence" />
        <ActionButton lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} linkName="Charisma" />
        <ActionButton lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} linkName="Luck" />
      </div>
      <div style={{
        width: '100%', height: '100%'
      }}>
        <BoxMessageBoard boardTitle='Stats' margin='0' padding='0' message='Strength: Dexterity: Intelligence: Charisma: __Luck__: ' />
      </div>
    </div>
  )
}