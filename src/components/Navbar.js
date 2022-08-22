import { useState } from 'react'
import { Link } from 'react-router-dom'
import SvgLogoComponent from '../components/SvgLogoComponent'
import Menu from './Menu'

// styles
import './Navbar.css'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
 
  return (
        <ul className='navbar'>
            <li className="logo"><Link to="/"><SvgLogoComponent /></Link></li>
            { isOpen && <Menu/> }
            <i className='fa fa-navicon' onClick={ () => setIsOpen(!isOpen)}/>
        </ul>
  )
}
