import { Link } from 'react-router-dom'
import iconZen from '../assets/iconZen.png'
import iconSwim from '../assets/iconSwim.png'
import iconBike from '../assets/iconBike.png'
import iconWeight from '../assets/iconWeight.png'
import '../styles/LateralBar.css'

function LateralBar() {
  return (
    <div className="lateralBar">
      <Link className="logo" to="/">
        <img src={iconZen} alt="icon"></img>
      </Link>
      <Link className="logo" to="/">
        <img src={iconSwim} alt="icon"></img>
      </Link>  
      <Link className="logo" to="/">
        <img src={iconBike} alt="icon"></img>
      </Link>  
      <Link className="logo" to="/">
        <img src={iconWeight} alt="icon"></img>
      </Link>  
     <p className='copyright'>
     Copiryght, SportSee 2020
     </p>
    </div>
  )
}

export default LateralBar