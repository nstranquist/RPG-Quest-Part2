import React from 'react'

//import ui components
import BoxHeader from '../ui-components/box-header'
import BoxSidebar from '../ui-components/box-sidebar'
import ActionButton from '../ui-components/action-btn'
import MessageBox from '../ui-components/box-messageboard'
//import styles
import './screen.css'
import { relative } from 'path';
import Battle from '../modules/battle';
// import screens
import TitleScreen from './title_screen'
import BattleScreen from './battle_screen'

// style variables
const lineHeight = '4.5em';
const actionBtnBg = 'url(/images/minecraft-wood.jpeg)';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.player = this.props.player;
    this.toggleTitleScreen = this.toggleTitleScreen.bind(this);
    this.toggleBattleScreen = this.toggleBattleScreen.bind(this);
    this.state = {
      titleActive: true,
      homeActive: false,
      battleActive: false,
    }
  }

  toggleTitleScreen = () => {
    this.setState({
      titleActive: false,
      homeActive: true,
    })
  }

  toggleBattleScreen = () => {
    console.log('battle triggered');
    this.setState({
      titleActive: false,
      battleActive: this.state.battleActive ? false : true,
      homeActive: this.state.homeActive ? false : true,
    })
    this.render();
  }

  handleBattleNav = () => {
    const battle = new Battle(this.player);
    console.log(battle)
  }

  toggleMusicCheckbox = () => {
    let musicInput = document.getElementById('music-input');
    musicInput.checked ^= 1;
    this.toggleAudio();
  }

  toggleAudio = () => {
    let myAudio = document.getElementById('title_music')
    myAudio.paused ? myAudio.play() : myAudio.pause();
  }

  render() {
    if (this.state.titleActive) {
      return (
        <TitleScreen toggleTitleScreen={this.toggleTitleScreen} />
      )
    }
    if (this.state.battleActive) {
      return (
        <BattleScreen toggleBattleScreen={this.toggleBattleScreen} player={this.player} />
      );
    }
    return (
      <div className="grid home-grid">
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          padding: '.3em',
          margin: '.3em'
        }} onClick={this.toggleMusicCheckbox}>
          <input id="music-input" type="checkbox" onChange={this.toggleAudio} />
          <span style={{ color: 'white', paddingLeft: '.3em' }}>Music</span>
        </div>
        <div className='top-inventory' style={{
          position: 'absolute',
          top: '1em', left: '1em',
          width: '10em', height: 'auto'
        }}>
          <div style={{
            position: 'relative', width: '100%', height: '100%', border: '1px solid red', color: 'white',
            background: '#333', padding: '0 .2em .2em .2em'
          }}>
            <div style={{ textAlign: 'center' }}>{this.props.player.name}</div>
            <div>Lvl: <span style={{ float: 'right' }}>{this.props.player.lvl + 1}</span></div>
            <div>xp: <span style={{ float: 'right' }}>{this.props.player.xp}</span></div>
            <div>gold: <span style={{ float: 'right' }}>{this.props.player.gold}</span></div>
          </div>
        </div>
        <BoxHeader title='RPGQuest' />
        <BoxSidebar headerDisplay='none'
          imgSrc='/images/player-m-02.png'
          imgAlt='A brave warrior' />
        <ActionButton onClick={this.toggleBattleScreen} toggleBattleScreen={this.toggleBattleScreen} linkName='Battle' lineHeight={lineHeight} margin='1em 0 0 1em' backgroundImage={actionBtnBg} />
        <ActionButton linkName='Character' linkRoute='/home/profile' lineHeight={lineHeight} margin='1em 1em 0 0' backgroundImage={actionBtnBg} />
        <ActionButton linkName='Shop' linkRoute='/home/shop' lineHeight={lineHeight} margin='0 0 1em 1em' backgroundImage={actionBtnBg} />
        <ActionButton linkName='Castle' linkRoute='/home/castle' lineHeight={lineHeight} margin='0 1em 1em 0' backgroundImage={actionBtnBg} />
        <MessageBox message='Battle Monsters to start earning gold and xp!' />
      </div>
    )
  }
}