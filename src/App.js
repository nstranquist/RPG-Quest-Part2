import React from 'react';
import { Switch, Route } from 'react-router-dom'

// import components
import Navigator from './navigator';
// import screens
import HomeScreen from './screens/home_screen'
import BattleScreen from './screens/battle_screen'
import ProfileScreen from './screens/profile_screen'

function App() {
  return (
    <main>
      <Switch>
        <Route
          exact
          path="/"
          component={HomeScreen}
        />
        <Route
          exact
          path="/battle"
          component={BattleScreen}
        />
        <Route
          exact
          path="/profile"
          component={ProfileScreen}
        />
      </Switch>
    </main>
  )
}

export default App;
