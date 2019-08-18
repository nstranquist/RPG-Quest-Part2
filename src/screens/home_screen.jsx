import React from 'react'

//import ui components
import BoxHeader from '../ui-components/box-header'
import BoxSidebar from '../ui-components/box-sidebar'
import ActionButton from '../ui-components/action-btn'
import MessageBox from '../ui-components/box-messageboard'
import MusicCheckbox from '../ui-components/checkbox-music'
//import styles
import './screen.css'
import Battle from '../modules/battle';
// import screens
import TitleScreen from './title_screen'
import BattleScreen from './battle_screen'
import ProfileScreen from './profile_screen'
import ShopScreen from './shop_screen'
import CastleScreen from './castle_screen'

// style variables
const lineHeight = '4.5em';
const actionBtnBg = 'url(/images/minecraft-wood.jpeg)';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.player = this.props.player;
    this.toggleMusicCheckbox = this.toggleMusicCheckbox.bind(this);
    this.toggleAudio = this.toggleAudio.bind(this);
    this.toggleScreen = this.toggleScreen.bind(this);
    this.state = {
      titleActive: true,
      homeActive: false,
      battleActive: false,
      profileActive: false,
      shopActive: false,
    }
  }

  toggleScreen = (e) => {
    let screenName = e.screenName;
    this.setState({
      titleActive: false
    });
    switch (screenName) {
      // can refactor these later to reduce code
      case 'battle':
        this.setState({
          battleActive: this.state.battleActive ? false : true,
        });
        break;
      case 'profile':
        this.setState({
          profileActive: this.state.profileActive ^= 1,
        });
        break;
      case 'shop':
        this.setState({
          shopActive: this.state.shopActive ^= 1,
        });
        break;
      case 'castle':
        this.setState({
          castleActive: this.state.castleActive ^= 1,
        });
        break;
      case 'title':
        this.setState({
          homeActive: true,
        });
        break;
    }
    this.setState({ homeActive: this.state.homeActive ^= 1 });
    this.render();
  }

  handleBattleNav = () => {
    const battle = new Battle(this.player);
    console.log(battle)
  }

  toggleMusicCheckbox = () => { // uncheck box and toggle audio
    // can use e.target to fix checkbox bug
    document.getElementById('music-input').checked ^= 1;  //toggles checkbox
    this.toggleAudio();
  }

  toggleAudio = () => {
    let myAudio = document.getElementById('title_music')
    myAudio.paused ? myAudio.play() : myAudio.pause();
  }

  render() {
    if (this.state.titleActive) {
      return (
        <TitleScreen toggleTitleScreen={this.toggleScreen} />
      )
    }
    if (this.state.battleActive) {
      return (
        <BattleScreen toggleBattleScreen={this.toggleScreen} player={this.player} />
      );
    }
    if (this.state.profileActive) {
      return (
        <ProfileScreen toggleProfileScreen={this.toggleScreen} player={this.player} />
      );
    }
    if (this.state.shopActive) {
      return (
        <ShopScreen toggleShopScreen={this.toggleScreen} />
      );
    }
    if (this.state.castleActive) {
      return (
        <CastleScreen toggleCastleScreen={this.toggleScreen} />
      );
    }
    return (
      <div className="grid home-grid">
        <MusicCheckbox toggleAudio={this.toggleAudio} toggleMusicCheckbox={this.toggleMusicCheckbox} />
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
        <ActionButton linkName='Battle' onClick={() => this.toggleScreen({ 'screenName': 'battle' })} toggleBattleScreen={this.toggleScreen} lineHeight={lineHeight} margin='1em 0 0 1em' backgroundImage={actionBtnBg} />
        <ActionButton linkName='Character' onClick={() => this.toggleScreen({ 'screenName': 'profile' })} toggleProfileScreen={this.toggleScreen} lineHeight={lineHeight} margin='1em 1em 0 0' backgroundImage={actionBtnBg} />
        <ActionButton linkName='Shop' onClick={() => this.toggleScreen({ 'screenName': 'shop' })} toggleShopScreen={this.toggleScreen} lineHeight={lineHeight} margin='0 0 1em 1em' backgroundImage={actionBtnBg} />
        <ActionButton linkName='Castle' onClick={() => this.toggleScreen({ 'screenName': 'castle' })} toggleCastleScreen={this.toggleScreen} lineHeight={lineHeight} margin='0 1em 1em 0' backgroundImage={actionBtnBg} />
        <MessageBox message='Battle Monsters to start earning gold and xp!' />
      </div>
    )
  }
}