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
    this.endGame = this.endGame.bind(this); // bind event so battle class can use    
    this.toggleScreen = this.props.toggleScreen;
    this.playersTurn = Math.floor(Math.random() * 2) === 0 ? true : false;
    this.battle = new Battle(this.props.player, this.endGame); // create new battle instance
    this.state = {
      winner: false,
      whoWon: '',
    }
    this.startBattle();
  }

  startBattle = () => {
    console.log(this.state.playersTurn);
    this.battle.startBattle();
    if (!this.state.playersTurn) {
      this.battle.startMonsterRound();
      this.setState({ playersTurn: true, });
    }
  }

  endGame = (winner, whoWon) => {
    this.setState({
      winner: true,
      whoWon: whoWon,
    });
    console.log(winner + ' won!');
  }

  handleAttack = () => {
    console.log('attack called!');
    this.battle.startRound();

    // toggle actions
    this.playersTurn = false;
    /*this.setTimeout(() => {
      this.setState({ playersTurn: true })
    }, 2000);*/
  }

  handleUseItem = () => {
    console.log('item used')
  }

  handleSelectInventory = () => {
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
        {this.playersTurn &&
          <div style={{
            paddingTop: '1.7em',
            borderTopRightRadius: '2em',
            borderTopLeftRadius: '2em',
            background: 'rgba(0,0,0,.6)',
            border: '3px solid red',
          }}>
            <ActionButton linkName='Attack' onClick={this.handleAttack} lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} />
            <ActionButton linkName="Items" onClick={this.handleUseItem} lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} />
            <ActionButton linkName="Weapons" onClick={this.handleSelectInventory} lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} />
            <ActionButton linkName="Pets" onClick={this.handleSelectInventory} lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} />
            <ActionButton linkName="Flee" onClick={() => this.toggleScreen({ 'screenName': 'home' })} lineHeight={lineHeight} backgroundSize={backgroundSize} margin={'0'} />
          </div>
        }
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