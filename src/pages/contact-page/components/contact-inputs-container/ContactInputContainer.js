import ContactPageMessageSubmitBtn from '../contact-page-message-submit-btn/ContactPageMessageSubmitBtn'
import './contactInputContainer.css'

const ContactInputContainer = () => {
  return (
    <div className='contact-page-inputs-main-container'>
      <h1>Inquiries</h1>
        <p>Email*</p>
        <input type='text' placeholder='Your email address'/>
        <p>Name*</p>
        <input type='text' placeholder='Your name'/>
        <p>Message*</p>
        <textarea placeholder='Enter a message'/>

        <ContactPageMessageSubmitBtn/>
    </div>
  )
}

export default ContactInputContainer
