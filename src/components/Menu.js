import { NavLink } from 'react-router-dom'
import { useLanguageContext } from '../hooks/useLanguageContext'


// styles
import './Menu.css'

export default function Menu() {
  const { setCurrentLanguage, currentLanguage, textContent:tc } = useLanguageContext()

  return (
        <ul className='menu'>
            <li><NavLink to='/'>{tc.menuItem1}</NavLink></li>
            <li><NavLink to='/products'>{tc.menuItem2}</NavLink></li>
            <li><NavLink to='/contact'>{tc.menuItem3}</NavLink></li>
            <li><NavLink to='/about'>{tc.menuItem4}</NavLink></li>
            <li><NavLink to='/references'>{tc.menuItem5}</NavLink></li>

            { currentLanguage === 'ENG' &&
            <li className='lang' onClick={() => setCurrentLanguage('CZE')}>CZE</li> }

            { currentLanguage === 'CZE' && 
            <li className='lang' onClick={() => setCurrentLanguage('ENG')}>ENG</li> }

        </ul>
  )
}
