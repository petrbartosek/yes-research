import { Link } from "react-router-dom"
import introRobot from "../../assets/Max.gif"
import { useState, useEffect } from "react"
import { useLanguageContext } from "../../hooks/useLanguageContext"

// styles
import "./Intro.css"

//components & pages
import arrow from '../../assets/arrow-down.svg'
import Technologies from "../../components/Technologies"
import References from "../references/References"

export default function Intro() {
  const {textContent: tc, currentLanguage } = useLanguageContext()

  const [title, setTitle] = useState(tc.title)
  const [counter, setCounter] = useState(8)
  const [dynamicTitle, setDynamicTitle] = useState('')

  const [hpBtn, setHpBtn ] = useState(false)

  useEffect(() => {
    if (counter <= title.length) {
      setTimeout(() => {
        setCounter(counter + 1);
      }, 80);
      setDynamicTitle(() => title.slice(0, counter) + "_");
    } else {
      setDynamicTitle(tc.title);
      setTimeout(() => setHpBtn(true), 500);
    }
  }, [counter, tc.title, title, currentLanguage]);

  return (
    <>
      <div className="intro">
        <img className="robotGif" src={introRobot} alt="company robot" />
        <h1 className="page-title">{dynamicTitle}</h1>

        { hpBtn && <Link to="/products">
          <button className="btn">{tc.buttonTitle}</button>
        </Link>}

        { hpBtn && <img className="refArrow" src={arrow} alt='reference arrow'/>}

      </div>
      <Technologies />
      <References />
    </>
  );
}
