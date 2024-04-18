import './index.scss';
import {Link} from 'react-router-dom'

export default function Home() {
  return (

<header className='pagina-home'>  


<h1 className='lt1'> Unhas Sempre <br/> Perfeitas </h1>
<p className='lt2'> Desperte a beleza nas suas mãos. Agende agora <br/>
sua sessão de manicure e descubra a arte de <br/> 
cuidar das suas unhas. Deixe-nos transformar seus <br/>  
dedos em obras-primas, embelezando sua vida <br/> 
uma unha de cada vez. </p>
<h2 className='lt3'> Ligue para o Agendamento</h2>


<nav className='tl1'>
<h2> Home </h2>
</nav>

<div className='tl2'>
<Link to= '/login'> Login </Link> 
</div>

<div className="container">
      <img src="https://media.discordapp.net/attachments/822153718497411137/1228102185032613958/image.png?ex=662ad249&is=66185d49&hm=7139dfb2e10e0d1633cbb3ec5b939403b1ff5fb6666deee8264047fd0d513a8c&=&format=webp&quality=lossless&width=924&height=700" alt='foto' className="imagem1" />
</div>

<div className="linha1"></div>

<section>

<h1 className='lt4'> Marque sua sessão <br/> e brilhe com estilo <br/> incomparável!</h1>

<p className='lt5'> De segunda a sexta, sua beleza em mãos há de <br/> 
brilhar, Agende agora e deixe seu estilo se destacar. <br/> 
Com cuidado e primor, nossa equipe irá cuidar, Em <br/> 
cada detalhe, sua beleza irá deslumbrar.
uma unha de cada vez. </p>

<h2 className='lt8'> Agendamento de Seg/Sex</h2>

<div className="container2">
      <img src="https://media.discordapp.net/attachments/1230280505547821096/1230280616088703068/image.png?ex=6632bf1c&is=66204a1c&hm=f06d66d84cd72f4834dab5c6cd4e71a3c77ccfd0ec2fe4802d6a8f9c77401d72&=&format=webp&quality=lossless&width=532&height=700" alt='foto2' className="imagem2"/>
</div>
</section>

<div className="linha2"></div>

<section>

<h1 className='lt6'> Localizado na Avenida Paulista </h1>

<p className='lt7'> Venha descobrir a elegância na Avenida Paulista! Nossa loja de manicure está pronta <br/>
para transformar suas mãos em obras de arte. Agende sua sessão hoje mesmo e deixe <br/> nossos especialistas cuidarem de você com todo o carinho e atenção que merece. <br/>
  Não perca a oportunidade de elevar seu estilo e visitar-nos na Avenida Paulista. <br/>
  Estamos ansiosos para recebê-lo!</p>

  <h2 className='lt9'> Venha nós conhecer!</h2>

<div className="container3">
      <img src="https://media.discordapp.net/attachments/1230280505547821096/1230294273623199804/image.png?ex=6632cbd4&is=662056d4&hm=b72f769da52b1136a4ddfea04b196c81b1b1888f6825c52a5cfd77f3a69a273f&=&format=webp&quality=lossless&width=1440&height=277" alt='foto3' className="imagem3"/>
</div>
</section>

<div className="linha3"></div>

<section>
<h1 className='lt10'> As cores alegram a vida, qual vai ser a sua? </h1>

<div className="linha4"></div>

<div className="container4">
      <img src="https://media.discordapp.net/attachments/1230280505547821096/1230296874783735848/image.png?ex=6632ce40&is=66205940&hm=33ce1d0fc5d7ca28063d980d8d7ddf208d59c598ff1213868012864d9bf148bf&=&format=webp&quality=lossless&width=574&height=700" alt='foto4' className="imagem4"/>
</div>

<div className="container5">
      <img src="https://media.discordapp.net/attachments/1230280505547821096/1230296929355694200/image.png?ex=6632ce4d&is=6620594d&hm=63a90ef3d1bf90dd12a550036b1872ac66fa2e7c82c1ee0a6cd9602c4b331c75&=&format=webp&quality=lossless&width=430&height=525" alt='foto5' className="imagem5"/>
</div>

<div className="container6">
      <img src="https://media.discordapp.net/attachments/1230280505547821096/1230296971172905032/image.png?ex=6632ce57&is=66205957&hm=a658c94473b80867090f589095b1deeced5f41e1c93a02ad680ea6401a33cf58&=&format=webp&quality=lossless&width=430&height=525" alt='foto6' className="imagem6"/>
</div>

<p className='lt11'> Pintura das Unhas</p>

<p className='lt12'> Unhas Postiças</p>

<p className='lt13'> Cuidar das Cutículas</p>
</section>

<div className="linha5"></div>

<section>
<h1 className='lt14'> Fale Conosco </h1>

<div className="linha6"></div>

<p className='lt15'> Entre em contato com agente por aqui, <br/> 
nos respondemos se seg/sex 9h/18. <br/>
Basta escrever sua mensagem na <br/> caixa ao lado e depois colocar o email <br/>
 de sua preferenciar e enviar.</p>

 <p className='lt16'> Escreva sua mensagem aqui.</p>

 <p className='lt17'> Digite seu email aqui.</p>

 <p className='lt18'> Enviar.</p>
</section>

<div className="linha7"></div>

<h1 className='lt19'> Manyxs </h1>

<section>

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


</section>

</header>

  );
}