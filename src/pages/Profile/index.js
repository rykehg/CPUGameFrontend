import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css'

export default function Profile() {
  const [userName, setUserName] = useState([]);
  
  const history = useHistory();

  const userId = localStorage.getItem('Id');
  const userName = localStorage.getItem('nm_user');

  useEffect(() => {
    api.get('/profile', {
      headers: {
        Authorization: userId,
      }
    }).then(response => {
      setUserName(response.data);
    })
  }, [userId]);

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <div className="profile-container">
      <header>
        <span>Bem vindo(a), {userName}</span>

        <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

    </div>
  );
}