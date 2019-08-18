import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// import Navigator from './navigator';
// import screens
//import TitleScreen from './screens/home_screen'
import HomeScreen from './screens/home_screen'
import LoginScreen from './screens/auth/login_screen'
import SignUpScreen from './screens/auth/signup_screen'
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
            path="/login"
            component={LoginScreen}
          />
          <Route
            exact
            path="/signup"
            component={SignUpScreen}
          />
        </Switch>
      </BrowserRouter>
    </main>
  )
}

export default App;
