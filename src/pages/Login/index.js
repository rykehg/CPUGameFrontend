import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

export default function Logon() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  
  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('/session/authenticate',
       { 
         email: email,
         password: password
        });

      localStorage.setItem('userId', response.data.user.cd_User);
      localStorage.setItem('email', response.data.user.nm_Email)
      localStorage.setItem('userName', response.data.user.nm_Name);
      localStorage.setItem('token', response.data.token);  
      console.log(response.data)    

      history.push('/profile');
    } catch (err) {
      alert('Falha no login, tente novamente.');
    }
  }

  return (
    <div className="logon-container">
      <div className="content">
        <section>

          <form onSubmit={handleLogin}>
            <h1>Faça seu login</h1>

            <input 
              placeholder="Seu e-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input 
              type='password'
              placeholder="Sua senha"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button className="button" type="submit">Entrar</button>

            <Link className="back-link" to="/auth/register">
              <FiLogIn size={16} color="#E02041" />
              Não tenho cadastro
            </Link>
            <Link className="back-link" to="/auth/forgotPassword">
              <FiLogIn size={16} color="#E02041" />
              Esqueci minha senha
            </Link>
          </form>
        </section>
      </div>
    </div>
  );
}