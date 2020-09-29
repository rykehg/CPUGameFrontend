import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';


export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [type, setType] = useState('');

  const history = useHistory();

/*   useEffect(() => {
    api.post('/auth/register').then(response => {    
    setRegister(response.data);
    console.log(response.data)
    })

    }, []); */

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      login,
      type
    };
    
    try {
      const response = await api.post('/auth/register', data);

      console.log(response)

      alert(`Verifique seu e-mail para continuar com o cadastro.`, response);

      history.push('/');
    } catch (error) {
      alert(`Erro no cadastro. ${error.response.data.error}`);
    } 
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <h1>Cadastro</h1>
          <p>Faça seu cadastro</p>

          <Link className="back-link" to="/Logon">
            <FiArrowLeft size={16} color="#E02041" />
            Já tenho cadastro
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input 
            placeholder="Nome" 
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <input 
            type="email" 
            placeholder="E-mail" 
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input 
            placeholder="Login de acesso"
            value={login}
            onChange={e => setLogin(e.target.value)} 
          />

{/*           <div onChange={e => setType.bind(e)}>
            <label htmlFor="Opcao"></label>
            <input type="radio" name="opção" value="professor" />Professor 
            <input type="radio" name="opção" value="aluno" />Aluno
          </div> */}

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}