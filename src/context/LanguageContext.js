import { useState, useEffect} from 'react'
import { createContext } from 'react'
import { textCZ, textEN } from '../assets/textcz_en'

export const LanguageContext = createContext()

export const LanguageContextProvider = ({ children }) => {
        const [currentLanguage, setCurrentLanguage ] = useState('CZE')
        const [textContent, setTextContent] = useState(textCZ)

        useEffect(() => { 
            currentLanguage ==='CZE' ? setTextContent(textCZ) : setTextContent(textEN)
        }, [currentLanguage, textContent])

    return (
        <LanguageContext.Provider value ={{ textContent, setCurrentLanguage, currentLanguage }}>
            { children }
        </LanguageContext.Provider>
    )
}