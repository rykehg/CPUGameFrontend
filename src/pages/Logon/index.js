import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

export default function Logon() {
  const [email, setEmail] = useState('');
  const [passsword, setPassword] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('/sessions', { id: email });

      localStorage.setItem('ongId', email);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (err) {
      alert('Falha no login, tente novamente.');
    }
  }

  return (
    <div className="logon-container">
      <section className="form">        

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input 
            placeholder="Seu Login"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input 
            placeholder="Sua Senha"
            value={passsword}
            onChange={e => setPassword(e.target.value)}
          />
          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/auth/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
    </div>
  );
}