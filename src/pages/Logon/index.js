import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

//TODO regra de negocio refatorar
function makeid() {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

export default function Logon() {
  const [email, setEmail] = useState('');
  const [passsword, setPassword] = useState('');
  const history = useHistory();
  const tolken = makeid()

  console.log(tolken)
  
  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('/sessions', { id: email });

      localStorage.setItem('email', email);
      localStorage.setItem('userName', response.data.name);
      localStorage.setItem('tolken', tolken)
      

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
            placeholder="Seu e-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input 
            placeholder="Sua senha"
            value={passsword}
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
  );
}