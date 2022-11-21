import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../styles/Header.css'

function Header() {
  return (
    <div className="navigation">
      <Link className="logo" to="/">
        <img src={logo} alt="logo"></img>
      </Link>
      <nav className="navbar">
        <Link className="acceuil" to="/">
          Accueil
        </Link>
        <Link className="profil" to="/">
          Profil
        </Link>
        <Link className="reglage" to="/">
          Reglage
        </Link> 
        <Link className="communaute" to="/">
          Communauté
        </Link>
      </nav>
    </div>
  )
}

export default Header