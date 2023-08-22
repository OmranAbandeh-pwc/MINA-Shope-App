import BoxSize from '../../../../components/box-size/BoxSize'
import './contactInfoContainer.css'

const ContactInfoContainer = () => {
  return (
    <div className='contact-info-main-container'>
      <h1>Headquarters</h1>
      <p>The Mina Studio <br/>8241 Us 41, <br/>Monteagle, <br/>TN, 37356</p>
        <BoxSize height='20px'/>
      <h1>Collaborations</h1>
      <p>Reach out to collaborate at <br/>collab@mina.com</p>
    </div>
  )
}

export default ContactInfoContainer
