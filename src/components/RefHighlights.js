import { useLanguageContext } from "../hooks/useLanguageContext"


export default function RefHighlights({ counter1 }) {
  const { textContent: tc } = useLanguageContext()

  return (
    <div className="reference-highlights">
      <div className="highlights-tile">
          <div className="counter">
              {counter1}
          </div>
          <div className="counter-description">
             { tc.highlight1 }
          </div>
      </div>
      <div className="highlights-tile">
          <div className="counter">
            5
          </div>
          <div className="counter-description">
          { tc.highlight2 }
          </div>
      </div>
      <div className="highlights-tile">
          <div className="counter">
              #1
          </div>
          <div className="counter-description">
          { tc.highlight3 }
          </div>
      </div>
    </div>
  )
}
