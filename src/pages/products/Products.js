import { Link } from 'react-router-dom'
import { useLanguageContext } from '../../hooks/useLanguageContext'

// styles
import './Products.css'

export default function Products() {
  const { textContent:tc } = useLanguageContext()

  return (
    <div className='products'>
        <h2 className='page-title'>{tc.productsTitle}</h2>
        
        <div className='products-container'>
          {/*Business intelligence */}
          <div className='product product-bi'>
            <button className='btn-products'>1. Business intelligence</button>
            <div className='product-description'>
              <p>{ tc.biPar1 }</p>
              <h4>{ tc.keyApp }</h4>
              <ul>
                <li><i className='fa fa-check'/>{ tc.keyAppFeature1 }</li>
                <li><i className='fa fa-check'/>{ tc.keyAppFeature2 }</li>
                <li><i className='fa fa-check'/>{ tc.keyAppFeature3 }</li>
                <li><i className='fa fa-check'/>{ tc.keyAppFeature4 }</li>
                <li><i className='fa fa-check'/>{ tc.keyAppFeature5 }</li>
                <li><i className='fa fa-check'/>{ tc.keyAppFeature6 }</li>
                <li><i className='fa fa-check'/>{ tc.keyAppFeature7 }</li>
              </ul>
              <img className='tech-logo' src='pic/logos/powerbi_logo.png' alt='power bi logo'/>
              <h4>{ tc.appExample }</h4>
                <p>{ tc.biPar2 }</p>
                <button className='btn free-demo'><Link to='/contact'>{ tc.biButton }</Link></button>
            </div>
          </div>

          {/*RPA */}
          <div className='product product-rpa'>
            <button className='btn-products'>2. RPA</button>

            <div className='product-description'>
              <p>{ tc.rpaPar1 }</p>
              <h4>{ tc.keyTech }</h4>
              <ul>
                <li><i className='fa fa-check'/>{ tc.keyTechFeature1 }</li>
                <li><i className='fa fa-check'/>{ tc.keyTechFeature2 }</li>
                <li><i className='fa fa-check'/>{ tc.keyTechFeature3 }</li>
                <li><i className='fa fa-check'/>{ tc.keyTechFeature4 }</li>
                <li><i className='fa fa-check'/>{ tc.keyTechFeature5 }</li>
                <li><i className='fa fa-check'/>{ tc.keyTechFeature6 }</li>
              </ul>
              <img className='tech-logo' src='pic/logos/power_automate_logo.png' alt='power bi logo'/>
              <h4>{ tc.experiencedIn }</h4>
                <p>{ tc.rpaPar2 }</p>
                <button className='btn free-demo'><Link to='/contact'>{ tc.rpaButton }</Link></button>
            </div>
          </div>

          {/*Other services Courses */}
          <div className='product product-other'>
            <button className='btn-products'>3. {tc.complementaryService}</button>
            <div className='product-description'>
              <p>{tc.complementaryPar1}</p>
              <h4>{tc.scope}</h4>
              <ul>
                <li><i className='fa fa-check'/>{tc.keyScopeFeature1}</li>
                <li><i className='fa fa-check'/>{tc.keyScopeFeature2}</li>
                <li><i className='fa fa-check'/>{tc.keyScopeFeature3}</li>
                <li><i className='fa fa-check'/>{tc.keyScopeFeature4}</li>
                <li><i className='fa fa-check'/>{tc.keyScopeFeature5}</li>
                <li><i className='fa fa-check'/>{tc.keyScopeFeature6}</li>
                <li><i className='fa fa-check'/>{tc.keyScopeFeature7}</li>
              </ul>
              <img className='tech-logo' src='pic/azure_logo.png' alt='azure logo'/>
  
            </div>
          </div>
        </div>

        <div className="products-thank"><img src='pic/DTpor.png' alt='contact_photo'/><br/>{tc.productsThank}
         <br /><br />{tc.productsDominik}
        </div>
    </div>
  )
}
