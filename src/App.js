import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// import Navigator from './navigator';
// import screens
import TitleScreen from './screens/home_screen'
import HomeScreen from './screens/home_screen'
import BattleScreen from './screens/battle_screen'
import ProfileScreen from './screens/profile_screen'
import ShopScreen from './screens/shop_screen'
import CastleScreen from './screens/castle_screen'
// import modules
import Player from './modules/player' //pass into (all screens?)
import RPG from './modules/rpg'  //keep running here

const myRPG = new RPG();
const myPlayer = new Player('nico');

// do i really want to be routing?? Or just swapping out the renders?

function App() { //app-container, container,
  return (
    <main className="aspect">
      <audio id="title_music" src="/music/castle-in-the-sky-remix.mp3" autoPlay loop />
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/home"
            render={(props) => <HomeScreen {...props} player={myPlayer} myRPG={myRPG} />}
          />
          <Route
            exact
            path="/home/profile"
            component={ProfileScreen}
          />
          <Route
            exact
            path="/home/shop"
            component={ShopScreen}
          />
          <Route
            exact
            path="/home/castle"
            component={CastleScreen}
          />
        </Switch>
      </BrowserRouter>
    </main>
  )
}

export default App;
