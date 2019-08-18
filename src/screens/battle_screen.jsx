import React, { useState } from 'react'

//import ui components
import BoxHeader from '../ui-components/box-header'
import BoxSidebar from '../ui-components/box-sidebar'
import ActionButton from '../ui-components/action-btn'
import HUD from '../ui-components/HUD'
//import styles
import './screen.css'
// import redux stuff
import store from '../_redux/store'
// import modules
import Battle from '../modules/battle'

// style variables
const lineHeight = '2em';
const backgroundSize = '100% 120%';
const margin = '0 0 .5em 0';

export default function BattleScreen({
  player
}) {
  const battle = useState(new Battle(player));
  const winner = useState(false); //initial state

  const handleTakeDamage = () => {
    console.log({ battle } + ', ' + { winner })
    console.log('damage called');
    //this.props.takeDamage(this.state); //this.state.monsterHealth, this.state.playerDamage
  }

  const handleUseItem = () => {
    console.log('item used')
  }

  const handleInventorySelect = () => {
    console.log('inventory item selected')
  }

  return (
    <div className="grid battle-grid">
      <HUD leftOrRight='left' />
      <HUD leftOrRight='right' />
      <BoxHeader title='Battle'
        colStart='2' colEnd='3' />
      <BoxSidebar headerDisplay='none'
        imgSrc='/images/player-m-02.png'
        imgAlt='A brave warrior' />
      <BoxSidebar headerDisplay='none'
        imgSrc='/images/monster-01.png'
        imgAlt='A frightening monster'
        direction='right' />
      <div style={{
        paddingTop: '1.7em',
        borderTopRightRadius: '2em',
        borderTopLeftRadius: '2em',
        background: 'rgba(0,0,0,.6)',
        border: '3px solid red',
      }}>
        <ActionButton onClick={handleTakeDamage} lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} linkName='Attack' />
        <ActionButton onClick={handleUseItem} lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} linkName="Items" />
        <ActionButton onClick={handleInventorySelect} lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} linkName="Weapons" />
        <ActionButton onClick={handleInventorySelect} lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} linkName="Pets" />
        <ActionButton lineHeight={lineHeight} backgroundSize={backgroundSize} margin='0' linkName="Flee" linkRoute='/home' />
      </div>
    </div>
  )
}


/*
<div className="simulateBtn" style={{
  dispay: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '50%',
  margin: '0 auto'
}}>
  <div>
    <input type="checkbox" />
    <span style={{ marginLeft: '.3em' }}>simulate</span>
  </div>
  <div>
    <input type="checkbox" />
    <span style={{ marginLeft: '.3em' }}>music</span>
  </div>
  <div>
    <input type="checkbox" />
    <span style={{ marginLeft: '.3em' }}>sfx</span>
  </div>
</div>
*/