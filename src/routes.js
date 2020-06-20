import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import RegisterPassword from './pages/RegisterPassword';
import RecoverPassword from './pages/RecoverPassword';
import Profile from './pages/Profile';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/auth/register" component={Register} />
        <Route path="/auth/registerPassword" component={RegisterPassword} />
        <Route path="/auth/recoverPassword" component={RecoverPassword} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}