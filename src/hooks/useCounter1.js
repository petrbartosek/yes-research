import { useState, useEffect } from "react"

export const Counter1Start = () => {
    const [counter1, setCounter1] = useState(20)
  
    useEffect(() => {
      if ( counter1 <= 20){
        setTimeout(() => setCounter1(counter1 + 1), 150)
      }
      else {
        setCounter1('20+')
      }
    }, [counter1])

    return counter1
  }