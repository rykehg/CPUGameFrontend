import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import RegisterPassword from './pages/RegisterPassword';
import ForgotPassword from './pages/ForgotPassword';
import RecoverPassword from './pages/RecoverPassword';
import Profile from './pages/Profile';
import Game from './pages/Game';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/auth/register" component={Register} />
        <Route path="/auth/registerPassword" component={RegisterPassword} />
        <Route path="/auth/forgotPassword" component={ForgotPassword} />
        <Route path="/auth/recoverPassword" component={RecoverPassword} />
        <Route path="/profile" component={Profile} />
        <Route path="/game/new" component={Game} />
      </Switch>
    </BrowserRouter>
  );
}