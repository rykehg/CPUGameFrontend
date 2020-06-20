import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';


export default function forgotPassword() {
  const [email, setEmail] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      email: email
    };

    try {
      const response = await api.post('/auth/forgot_password', data);

      if(response)
      alert(`Cheque seu e-mail para continuar.`);

      history.push('/');
    } catch (err) {
      alert(`Erro no cadastro. ${err}`);
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <h1>Recuperar Senha</h1>
          <p>Recupere sua senha</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Já tenho cadastro
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input 
            type="email" 
            placeholder="E-mail" 
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <button className="button" type="submit">Enviar E-mail</button>
        </form>
      </div>
    </div>
  );
}