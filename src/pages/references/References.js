
// styles
import './References.css'

// hooks
import { useLanguageContext } from '../../hooks/useLanguageContext'
import { Counter1Start } from '../../hooks/useCounter1'

// pages & components
import RefHighlights from '../../components/RefHighlights'

 
export default function References() {
  const {textContent: tc } = useLanguageContext()
  const counter1 = Counter1Start()

  return (
    <div className='references'> 
        <h1 className='page-title'>{tc.referenceTitle}</h1>
        
        <RefHighlights counter1 = { counter1 } />

        {/*reference list*/}
        {tc.refContent.map((ref) => (
          <div className="single-reference" key={ref.logo}>
           
            <img className='client-logo' src={ref.logo} alt="client logo" />
            <div className="reference-client-info">
              <h2 className="refTitle">{ref.title}</h2>
              <p className="refAnswer">{ref.answer}</p>
            </div> 
            
          </div>
        ))}
        <div className="reference-thank"><img src='pic/PBpor.png' alt='contact_photo'/>
        <br/>{tc.thank} <br /><br />{tc.thankPetr}</div>

    </div>
  )
}
