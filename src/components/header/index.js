import logo from '../../assets/images/logo.svg'
import './style.css'

function Header() {
  return (
    <header className='site_header'>
      <div className='logo'>
        <img src={logo} alt=''/>
      </div>
      <button type='button' className='get_for_free_btn'>Get for free</button>
    </header>
  )
}
export default Header;