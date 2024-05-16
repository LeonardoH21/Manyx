import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importe Link do react-router-dom
import './ForgotPassword.scss';
import Cabecalho from '../../components/cabecalho';
//import manyxsLogo from './manyxs_logo.png'; // Importe sua imagem da logo aqui

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showHomeButton, setShowHomeButton] = useState(false);

  const handleSendEmail = () => {
    if (email.trim() !== '') {
      setMessage('Enviamos um código de recuperação para seu E-mail!');
      setShowHomeButton(true);
    } else {
      setMessage('Por favor, informe um E-mail válido.');
    }
  };

  return (
    <div className="forgot-password-container logo-container">
      <img src='assets/images/logo.png' alt="Manyxs Logo" className="logo" />
      <input
        type="email"
        placeholder="Informe o E-mail de recuperação"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="email-input"
      />
      <button onClick={handleSendEmail} className="send-button">
        Enviar
      </button>
      {message && <p className="message">{message}</p>}
      {showHomeButton && (
        <Link to="http://localhost:3000/" className="home-button">
          Página Inicial
        </Link>
      )}

      <div className='comp-cabecalho'>
      <Cabecalho titulo="" />
      </div>

    </div>
  );
};

export default ForgotPassword;
