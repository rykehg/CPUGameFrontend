import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';


export default function Register() {
  const [token, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');


  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      token: token,
      email: email,
      password: password
    };

    try {
      const response = await api.post('/auth/reset_password', data);

      if(response)
      alert(`Senha cadastrada com sucesso.`);

      history.push('/');
    } catch (err) {
      alert(`Erro no cadastro. ${err}`);
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <h1>Cadastro</h1>
          <p>Cadastre sua senha</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Já tenho cadastro
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input 
            placeholder="Token de acesso" 
            value={token}
            onChange={e => setName(e.target.value)}
          />

          <input 
            type="email" 
            placeholder="email" 
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input 
            placeholder="Senha de acesso"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)} 
          />

          <input 
            placeholder="Repita sua Senha"
            type="password"
            value={password1}
            onChange={e => setPassword1(e.target.value)} 
          />

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}