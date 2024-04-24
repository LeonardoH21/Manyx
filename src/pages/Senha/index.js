import React, { useState } from 'react';
import './ForgotPassword.scss';
import manyxsLogo from './manyxs_logo.png'; // Importe sua imagem da logo aqui

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendEmail = () => {
    if (email.trim() !== '') {
      setMessage('Enviamos um código de recuperação para seu E-mail!');
    } else {
      setMessage('Por favor, informe um E-mail válido.');
    }
  };

  return (
    <div className="forgot-password-container">
      <img src={manyxsLogo} alt="Manyxs Logo" className="logo" />
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
    </div>
  );
};

export default ForgotPassword;
