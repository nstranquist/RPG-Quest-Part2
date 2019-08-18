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

import TitleScreen from './title_screen'

// style variables
const lineHeight = '4.5em';
const actionBtnBg = 'url(/images/minecraft-wood.jpeg)';

export default function HomeScreen({
  player, myRPG
}) {

  const handleBattleNav = () => {
    const battle = new Battle(player);
    console.log(battle)
  }

  const toggleAudio = () => {
    let myAudio = document.getElementById('title_music')
    myAudio.paused ? myAudio.play() : myAudio.pause();
  }


  return (
    <div className="grid home-grid">
      <div className='top-inventory' style={{
        position: 'absolute',
        top: '1em', left: '1em',
        width: '10em', height: 'auto'
      }}>
        <div style={{
          position: relative, width: '100%', height: '100%', border: '1px solid red', color: 'white',
          background: '#333', padding: '0 .2em .2em .2em'
        }}>
          <div style={{ textAlign: 'center' }}>{player.name}</div>
          <div>Lvl: <span style={{ float: 'right' }}>{player.lvl + 1}</span></div>
          <div>xp: <span style={{ float: 'right' }}>{player.xp}</span></div>
          <div>gold: <span style={{ float: 'right' }}>{player.gold}</span></div>
        </div>
      </div>
      <BoxHeader title='RPGQuest' />
      <BoxSidebar headerDisplay='none'
        imgSrc='/images/player-m-02.png'
        imgAlt='A brave warrior' />
      <ActionButton linkName='Battle' linkRoute='/home/battle' lineHeight={lineHeight} margin='1em 0 0 1em' backgroundImage={actionBtnBg} />
      <ActionButton linkName='Character' linkRoute='/home/profile' lineHeight={lineHeight} margin='1em 1em 0 0' backgroundImage={actionBtnBg} />
      <ActionButton linkName='Shop' linkRoute='/home/shop' lineHeight={lineHeight} margin='0 0 1em 1em' backgroundImage={actionBtnBg} />
      <ActionButton linkName='Castle' linkRoute='/home/castle' lineHeight={lineHeight} margin='0 1em 1em 0' backgroundImage={actionBtnBg} />
      <MessageBox message='Battle Monsters to start earning gold and xp!' />
    </div>
  )
}