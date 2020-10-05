import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css'

export default function Profile() {
  const history = useHistory();
  //const userId = localStorage.getItem('cd_User');
  const userName = localStorage.getItem('userName');

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <div className="profile-container">

    </div>
  );
}