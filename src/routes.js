import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { NavigationBar } from './components/NavigationBar';
import { Layout } from './components/Layout';

import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterPassword from './pages/RegisterPassword';
import ForgotPassword from './pages/ForgotPassword';
import RecoverPassword from './pages/RecoverPassword';
import Profile from './pages/Profile';
import Game from './pages/Game';
import GameRules from './pages/GameRules';
import GameCards from './pages/GameCards';


export default function Routes() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/login" component={Login} />
          <Route path="/auth/register" component={Register} />
          <Route path="/auth/registerPassword" component={RegisterPassword} />
          <Route path="/auth/forgotPassword" component={ForgotPassword} />
          <Route path="/auth/recoverPassword" component={RecoverPassword} />
          <Route path="/profile" component={Profile} />
          <Route path="/game/new" component={Game} />
          <Route path="/game/rules" component={GameRules} />
          <Route path="/game/cards" component={GameCards} />
          <Route component={NoMatch} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}