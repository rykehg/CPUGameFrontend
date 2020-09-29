import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { NavigationBar } from './components/NavigationBar';
import { Layout } from './components/Layout';

import Logon from './pages/Logon';
import Register from './pages/Register';
import RegisterPassword from './pages/RegisterPassword';
import ForgotPassword from './pages/ForgotPassword';
import RecoverPassword from './pages/RecoverPassword';
import Profile from './pages/Profile';
import Game from './pages/Game';
import Home from './pages/Home';
import About from './pages/About';
import NoMatch from './pages/NoMatch';

export default function Routes() {
  return (
    <BrowserRouter>
    <NavigationBar />
    <Layout>
      <Switch>
        <Route path="/Logon" component={Logon} />
        <Route path="/auth/register" component={Register} />
        <Route path="/auth/registerPassword" component={RegisterPassword} />
        <Route path="/auth/forgotPassword" component={ForgotPassword} />
        <Route path="/auth/recoverPassword" component={RecoverPassword} />
        <Route path="/profile" component={Profile} />
        <Route path="/game/new" component={Game} />
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route component={NoMatch} />
      </Switch>
    </Layout>
    </BrowserRouter>
  );
}