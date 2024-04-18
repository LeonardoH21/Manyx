import './index.scss';

export default function Login() {
  return (
    <div className='login-page'>
      <div className='login-container'>
        <h2>Login Adm</h2>
        <form id='login-form'>
          <input type='email' id='email' name='email' placeholder='EndereÃ§o de E-mail' required/><br/>
          <input type='password' id='password' name='password' placeholder='Senha' required/><br/>
          <div className='remember-me'>
            <input type='checkbox' id='remember' name='remember'/>
            <label htmlFor='remember'>Lembrar-me</label>
          </div>
          <input type='submit' value='Entrar'/>
        </form>
        <a href='#'>Voltar ao site principal</a>
      </div>
    </div>
  );
}