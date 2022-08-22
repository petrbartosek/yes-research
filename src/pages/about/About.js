import { Link } from 'react-router-dom'
// styles
import './About.css'
import React from 'react'

// pages & components
import Technologies from "../../components/Technologies"
import RefHighlights from '../../components/RefHighlights'

// hooks
import { Counter1Start } from '../../hooks/useCounter1'
import { useLanguageContext } from '../../hooks/useLanguageContext'

export default function About() {

  const counter1 = Counter1Start()
  const {textContent:tc } = useLanguageContext()

  return (
    <div className='about'>
        <h2 className='page-title'>{tc.aboutTitle}</h2>
        <div className='about-container'>
            <h3 className='refTitle'>{tc.aboutHeading1}</h3>
            <p>{tc.par1}</p>

            <h3>{tc.aboutHeading2}</h3>
            <p>{tc.par2}</p>
          
            <h3>{tc.aboutHeading3}</h3>
            <p>{tc.par3}</p>

            <p><Link to='/references'>{tc.references}</Link></p>
            <img src='pic/PBpor.png' alt='Petr Bartošek foto' />
            <div className='about-thank'>{tc.aboutThank}</div>
    
        </div>
        <Technologies />
        <RefHighlights counter1 = { counter1 } />
    </div>
  )
}

