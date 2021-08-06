
import Logo from './Logo';
import TextLogo from '../Logo/TextLogo';
import './Logotip.scss';

const Logotip = (props) => {
  return (
      <div className='logotip'>
                <Logo width={'180px'} heigth={'165px'} />
                <TextLogo />
      </div>
  )
}

export default Logotip