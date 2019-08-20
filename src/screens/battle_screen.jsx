import React from 'react'
//import ui components
import BoxHeader from '../ui-components/box-header'
import BoxSidebar from '../ui-components/box-sidebar'
import ActionButton from '../ui-components/action-btn'
import HUD from '../ui-components/HUD'
// import modules
import Battle from '../modules/battle'
// import redux stuff
//import store from '../_redux/store'

//import styles
import './screen.css'

export default class BattleScreen extends React.Component {
  constructor(props) {
    super(props);
    this.battle = new Battle(this.props.player);
    this.toggleScreen = this.props.toggleScreen;
    this.state = {
      winner: false,
    }
  }

  handleTakeDamage = () => {
    console.log(this.battle + ', ' + this.winner);
    console.log('damage called');
    //this.props.takeDamage(this.state); //this.state.monsterHealth, this.state.playerDamage
  }

  handleUseItem = () => {
    console.log('item used')
  }

  handleInventorySelect = () => {
    console.log('inventory item selected')
  }

  render() {
    return (
      <div className="grid battle-grid" >
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
          <ActionButton linkName='Attack' onClick={this.handleTakeDamage} lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} />
          <ActionButton linkName="Items" onClick={this.handleUseItem} lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} />
          <ActionButton linkName="Weapons" onClick={this.handleInventorySelect} lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} />
          <ActionButton linkName="Pets" onClick={this.handleInventorySelect} lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} />
          <ActionButton linkName="Flee" onClick={() => this.toggleScreen({ 'screenName': 'home' })} lineHeight={lineHeight} backgroundSize={backgroundSize} margin={'0'} />
        </div>
      </div>
    );
  }
}

// style variables, refactor later
const lineHeight = '2em';
const backgroundSize = '100% 120%';
const margin = '0 0 .5em 0'



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