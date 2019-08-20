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
    this.toggleScreen = this.props.toggleScreen;
    this.state = {
      winner: false,
      whoWon: '',
      playersTurn: Math.floor(Math.random() * 2) === 0 ? true : false,
    }
    this.battle = new Battle(this.props.player); // create new battle instance
    this.startBattle();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    this.cancelSetState = true;
    console.log('componentWillUnmount');
  }

  startBattle = () => {
    console.log(this.state.playersTurn);
    if (this.props.player.health <= 0) {
      console.log('You are already... DEAD');
      this.toggleScreen({ 'screenName': 'home' });
    }
    this.battle.startBattle();
    if (!this.state.playersTurn) {
      this.battle.startMonsterRound();
      setTimeout(() => this.toggleBattleMenu(), 1000); // toggle nav
    }
  }

  endGame = (whoWon) => {
    console.log(whoWon + ' won!');
    this.setState({
      winner: true,
      whoWon: whoWon,
    });
    // add rewards and stats to player
    /*if (whoWon === 'player') {
      const reward = this.battle.getReward();
      this.props.player.addBattleReward(reward, reward)
    }*/
  }

  handleAttack = () => {
    console.log('damage called');
    // disable attack buttons
    this.setState({ playersTurn: false });
    // start battle round
    let winner = this.battle.startRound();
    // check for winner
    if (winner)
      this.endGame('player');
    // replace
    else {
      // if no winner, play monster round
      winner = this.battle.startMonsterRound();
      if (winner)
        this.endGame('monster');
    }
    // toggle nav
    setTimeout(() => this.toggleBattleMenu(), 1000);
  }

  toggleBattleMenu = () => {
    this.setState({ playersTurn: true });
    this.render();
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
        {this.state.playersTurn && !this.state.winner &&
          < div style={{
            paddingTop: '1.7em',
            borderTopRightRadius: '2em',
            borderTopLeftRadius: '2em',
            background: 'rgba(0,0,0,.6)',
            border: '3px solid red',
          }}>
            <ActionButton linkName="Attack" onClick={this.handleAttack} lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} />
            <ActionButton linkName="Items" onClick={this.handleUseItem} lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} />
            <ActionButton linkName="Weapons" onClick={this.handleSelectInventory} lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} />
            <ActionButton linkName="Pets" onClick={this.handleSelectInventory} lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} />
            <ActionButton linkName="Flee" onClick={() => this.toggleScreen({ 'screenName': 'home' })} lineHeight={lineHeight} backgroundSize={backgroundSize} margin={'0'} />
          </div>
        }
        {this.state.winner &&
          < div style={{
            paddingTop: '1.7em',
            borderTopRightRadius: '2em',
            borderTopLeftRadius: '2em',
            background: 'rgba(0,0,0,.6)',
            border: '3px solid red',
            /*
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            */
          }}>
            <div style={{
              height: '4em', width: '100%', background: 'beige'
            }}>
              {this.state.whoWon === 'player' ? 'You Won!' : 'You Lost!'}
            </div>
            <ActionButton linkName="Go Back" onClick={() => this.toggleScreen({ 'screenName': 'home' })} lineHeight={lineHeight} backgroundSize={backgroundSize} margin={margin} />
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