import React from 'react'
//import ui components
import BoxHeader from '../ui-components/box-header'
import BoxSidebar from '../ui-components/box-sidebar'
import ActionButton from '../ui-components/action-btn'
import MessageBox from '../ui-components/box-messageboard'
import MusicCheckbox from '../ui-components/checkbox-music'
import InventoryBox from '../ui-components/box-inventory'
// import modules
import Player from '../modules/player';
// import screens
import TitleScreen from './title_screen'
import BattleScreen from './battle_screen'
import ProfileScreen from './profile_screen'
import ShopScreen from './shop_screen'
import CastleScreen from './castle_screen'
//import styles
import './screen.css'

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.player = new Player('nico'); //make dynamic later
    this.toggleMusicCheckbox = this.toggleMusicCheckbox.bind(this);
    this.toggleAudio = this.toggleAudio.bind(this);
    this.toggleScreen = this.toggleScreen.bind(this);
    this.state = {
      screenActive: 'title'
    }
  }

  toggleScreen = (e) => {
    this.setState({
      screenActive: e.screenName,
    })
    this.render();
  }

  toggleMusicCheckbox = () => { // uncheck box and toggle audio
    document.getElementById('music-input').checked ^= 1;  //toggles checkbox
    this.toggleAudio();
  }

  toggleAudio = () => {
    let myAudio = document.getElementById('title_music')
    myAudio.paused ? myAudio.play() : myAudio.pause();
  }

  render() {
    if (this.state.screenActive !== 'home') {
      let screenComponent;
      switch (this.state.screenActive) {
        case 'title':
          screenComponent = <TitleScreen toggleScreen={this.toggleScreen} />
          break;
        case 'battle':
          screenComponent = <BattleScreen toggleScreen={this.toggleScreen} player={this.player} />
          break;
        case 'profile':
          screenComponent = <ProfileScreen toggleScreen={this.toggleScreen} player={this.player} />
          break;
        case 'shop':
          screenComponent = <ShopScreen toggleScreen={this.toggleScreen} />
          break;
        case 'castle':
          screenComponent = <CastleScreen toggleScreen={this.toggleScreen} />
          break;
      }
      return screenComponent;
    }

    return (
      <div className="grid home-grid">
        <MusicCheckbox toggleAudio={this.toggleAudio} toggleMusicCheckbox={this.toggleMusicCheckbox} />
        <InventoryBox playerName={this.player.name} playerStats={this.player.stats} />
        <BoxHeader title='RPGQuest' />
        <BoxSidebar headerDisplay='none'
          imgSrc='/images/player-m-02.png'
          imgAlt='A brave warrior' />
        <ActionButton linkName='Battle' onClick={() => this.toggleScreen({ 'screenName': 'battle' })} toggleBattleScreen={this.toggleScreen} lineHeight={lineHeight} margin='1em 0 0 1em' backgroundImage={actionBtnBg} />
        <ActionButton linkName='Character' onClick={() => this.toggleScreen({ 'screenName': 'profile' })} toggleProfileScreen={this.toggleScreen} lineHeight={lineHeight} margin='1em 1em 0 0' backgroundImage={actionBtnBg} />
        <ActionButton linkName='Shop' onClick={() => this.toggleScreen({ 'screenName': 'shop' })} toggleShopScreen={this.toggleScreen} lineHeight={lineHeight} margin='0 0 1em 1em' backgroundImage={actionBtnBg} />
        <ActionButton linkName='Castle' onClick={() => this.toggleScreen({ 'screenName': 'castle' })} toggleCastleScreen={this.toggleScreen} lineHeight={lineHeight} margin='0 1em 1em 0' backgroundImage={actionBtnBg} />
        <MessageBox message='Battle Monsters to start earning gold and xp!' />
      </div>
    )
  }
}

// style variables
const lineHeight = '4.5em';
const actionBtnBg = 'url(/images/minecraft-wood.jpeg)';