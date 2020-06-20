import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';


export default function RecoverPassword() {
  const [token, setName] = useState('');
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword1, setNewPassword1] = useState('');
  const [newPassword2, setNewPassword2] = useState('');


  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      token: token,
      email: email,
      currentPassword: currentPassword,
      newPassword: newPassword1
    };

    try {
      const response = await api.post('/auth/recover_password', data);

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
            placeholder="E-mail" 
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input 
            placeholder="Senha de acesso"
            type="password"
            value={currentPassword}
            onChange={e => setCurrentPassword(e.target.value)} 
          />

          <input 
            placeholder="Repita sua Senha"
            type="password"
            value={newPassword1}
            onChange={e => setNewPassword1(e.target.value)} 
          />

          <input 
            placeholder="Repita sua Senha"
            type="password"
            value={newPassword2}
            onChange={e => setNewPassword2(e.target.value)} 
          />

          <button className="button" type="submit">Cadastrar Senha</button>
        </form>
      </div>
    </div>
  );
}