import emailjs from "emailjs-com"
import React, { useRef, useState } from 'react';

// styles
import { useLanguageContext } from '../../hooks/useLanguageContext'
import './Contact.css'

  export default function Contact() {
    const { textContent: tc } = useLanguageContext()
    const form = useRef();
    const [spamInput, setSpamInput] = useState(false)

    
    const sendEmail = (e) => {
      e.preventDefault()
      
      if (!spamInput){

        emailjs.sendForm('service_i2zj2b9', 'template_prze89n', form.current, 'Uc0C7i9cuu8laWHoA')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
        
        e.target.reset()
      }
      else {
        console.log('It is an Spam!!!')
      }
    }

    return (
      <div className='contact'> 
          <h2 className='page-title'>{tc.contactTitle}</h2>

          <form ref={form} onSubmit={sendEmail} className='contact-form'>
            <h2>{tc.contactFormTitle}</h2>
            <div className='contact-subtitle'></div>

            <label>
              <span>{tc.contactName}</span>
              <input type='text' name="from_name" />
            </label>
            <label>
              <span>{tc.contactEmail}</span>
              <input type='email' name="from_email"/>
            </label>

            <label>
              <span>{tc.contactMessage}</span>
              <textarea name="message">
              </textarea>
            </label>
            <input type='text' className="spam-input" name="spam" onChange= { () => setSpamInput(true) }/>

            <button className="btn">{tc.contactButton}</button>
            <span>+420 607 177 293</span>
            <span>support@yes-research.com</span>
          
          </form>
          
          <div className="contact-thank"><img src='pic/DTpor.png' alt='contact_photo'/><br/>{tc.contactFormSubTitle}
            <br /><br />{tc.productsDominik}
          </div>
      </div>
    )
  }
  