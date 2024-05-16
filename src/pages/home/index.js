import './index.scss';
import React, { useState } from 'react';
import {Link} from 'react-router-dom'


export default function Home() {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    if (!email.includes('@')) {
      setErrorMessage('Email inválido');
      setSuccessMessage('');
    } else {
      setErrorMessage('');
      setSuccessMessage('Sua mensagem foi enviada com sucesso!');
      // Aqui você pode adicionar a lógica para enviar a mensagem
    }
  };
  return (

<body className='pagina-home'>  


<h1 className='lt1'> Unhas Sempre <br/> Perfeitas </h1>
<p className='lt2'> Desperte a beleza nas suas mãos. Agende agora <br/>
sua sessão de manicure e descubra a arte de <br/> 
cuidar das suas unhas. Deixe-nos transformar seus <br/>  
dedos em obras-primas, embelezando sua vida <br/> 
uma unha de cada vez. </p>
<h2 className='lt3'> Ligue para o Agendamento!</h2>


{/* <nav className='tl1'>
<h2> Home </h2>
  </nav> */}


<div className='login'>
<Link to= '/login'> Login </Link> 
</div>

<div className='cabecalho'>
<Link to= ''> Home </Link> 
</div>

<div className="container">
      <img src="assets/images/1.png" alt='foto' className="imagem1" />
</div>

<div className="linha1"></div>

<section>

<h1 className='lt4'> Marque sua sessão <br/> e brilhe com estilo <br/> incomparável!</h1>

<p className='lt5'> De segunda a sexta, sua beleza  em mãos há de 
brilhar, <br/> Agende agora e deixe seu estilo se destacar. <br/> 
Com cuidado e primor, nossa equipe irá cuidar,<br/> Em 
cada detalhe, sua beleza irá deslumbrar.</p>

<h2 className='lt8'> Agendamento de Seg/Sex</h2>

<div className="container2">
      <img src="assets/images/2.png" alt='foto2' className="imagem2"/>
</div>
</section>

<div className="linha2"></div>

<section>

<h1 className='lt6'> Localizado na Avenida Paulista </h1>

<p className='lt7'> Venha descobrir a elegância na Avenida Paulista! Nossa loja de manicure está pronta <br/>
para transformar suas mãos em obras de arte. Agende sua sessão hoje mesmo e deixe <br/> nossos especialistas cuidarem de você com todo o carinho e atenção que merece. <br/>
  Não perca a oportunidade de elevar seu estilo e visitar-nos na Avenida Paulista. <br/>
  Estamos ansiosos para recebê-lo!</p>

  <h2 className='lt9'> VENHA NÓS CONHECER!</h2>

<div className="container3">
      <img src="assets/images/3.png" alt='foto3' className="imagem3"/>
</div>
</section>

<div className="linha3"></div>

<section>
<h1 className='lt10'> As cores alegram a vida, qual vai ser a sua? </h1>

<div className="linha4"></div>

<div className="container4">
      <img src="assets/images/4.png" alt='foto4' className="imagem4"/>
</div>

<div className="container5">
      <img src="assets/images/5.png" alt='foto5' className="imagem5"/>
</div>

<div className="container6">
      <img src="assets/images/6.png" alt='foto6' className="imagem6"/>
</div>

<p className='lt11'> Pintura das Unhas</p>

<p className='lt12'> Unhas Postiças</p>

<p className='lt13'> Cuidar das Cutículas</p>
</section>

<div className="linha5"></div>

<section>

<h1 className='lt14'>Fale Conosco</h1>
        <div className="linha6"></div>
        <p className='lt15'>Entre em contato conosco aqui, nós respondemos <br/> de segunda a sexta das 9h às 18h. Basta escrever sua <br/> mensagem na caixa ao lado e depois colocar o seu email <br/> de preferência e enviar.</p>
        <p className='lt16'>
          <input
            type="text"
            placeholder="Escreva sua mensagem aqui"
            value={message}
            onChange={handleMessageChange}
          />
        </p>
        <p className='lt17'>
          <input
            type="text"
            placeholder="Digite seu email aqui"
            value={email}
            onChange={handleEmailChange}
          />
          {errorMessage && <span style={{ color: 'red' }}> Email inválido</span>}
        </p>
        <p className='lt18'>
          <button onClick={handleSubmit}>Enviar</button>
          {successMessage && <span style={{ color: 'green' }}> Sua mensagem foi enviada com sucesso!</span>}
        </p>
      </section>

<h3 className='lt19'>Manyxs</h3>

      {/* Conteúdo do rodapé */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Manyxs</p>
          <div className="social-links">
            <a href="https://www.facebook.com/?locale=pt_BR">Facebook</a>
            <a href="https://www.instagram.com/">Instagram</a>
            <a href="https://twitter.com/login?lang=pt">Twitter</a>
          </div>
        </div>
      </footer>
    </body>
  );
}