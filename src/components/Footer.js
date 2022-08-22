import { Link } from 'react-router-dom'
import SvgLogoComponent from './SvgLogoComponent'

// styles
import "./Footer.css"


export default function Footer() {
  return (
    <div className='footer'>
      <ul>
        <Link to="/"><SvgLogoComponent/></Link>
        <li><i className='fas fa-feather-alt'/>support@yes-research.com</li>
        <li><i className='fas fa-phone-alt'/>+420 607 177 293</li>
        <li><img src="pic/logos/logoMP.png" alt="microsoft partner logo" /></li>
      </ul>
    </div>
  )
}

