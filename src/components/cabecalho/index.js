import './index.scss'
import manyxsLogo from './manyxs_logo.png';

export default function Cabecalho(props) {

  return (
    <div className='comp-cabecalho'>
      <div>MANICURE</div>
      <div className="nm2"> {props.titulo ?? 'MANYXS'} </div>
      <div>
      <img src={manyxsLogo} alt="Manyxs Logo" className="logo" /></div>
    </div>
  )
}