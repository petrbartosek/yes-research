import { useLanguageContext } from '../../hooks/useLanguageContext'

// styles
import './Scm.css'

export default function Scm() {
    const { textContent:tc } = useLanguageContext()


  return (
    <div className='scm'>
        <div>
            <h2 className='page-title'>Shopping centre manager</h2>
            <img className='robotGif' src="pic/MaxWhiteSmall.gif" alt="scm robot pic" />
            <div className="scmTextcontainer">
                <ul className='scmList'>
                    <li><i className='fa fa-check'/>{tc.scmHint1}</li>
                    <li><i className='fa fa-check'/>{tc.scmHint2}</li>
                    <li><i className='fa fa-check'/>{tc.scmHint3}</li>
                    <li><i className='fa fa-check'/>{tc.scmHint4}</li>
                    <li><i className='fa fa-check'/>{tc.scmHint5}</li>
                </ul>
                
                <p className='scmDescription'>
                    {tc.scmPar}
                </p>
            </div>  
                <div className='circleContainer'>
                    <div className='circle1'><img src="pic/floorplan.png" alt="floorplan" /></div>
                    <div className='circle1'><img src="pic/graph.png" alt="floorplan" /></div>
                    <div className='circle1'><img src="pic/graph2.png" alt="floorplan" /></div>
                    <div className='circle1'><img src="pic/graph3.png" alt="floorplan" /></div>
                    <div className='circle1'><img src="pic/graph4.png" alt="floorplan" /></div>
                    <div className='circle1'><img src="pic/graph6.png" alt="floorplan" /></div>
                    <div className='circle1'><img src="pic/graph7.png" alt="floorplan" /></div>
                </div>
            </div>
    </div>
  )
}
