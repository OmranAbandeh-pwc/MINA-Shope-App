import './contactPage.css'
import TopPageHeadTitleContainer from '../../components/top-page-head-title-container/TopPageHeadTitleContainer'
import ContactInfoContainer from './components/contact-info-container/ContactInfoContainer'
import ContactInputContainer from './components/contact-inputs-container/ContactInputContainer'

const ContactPage = () => {
  return (
    <div className='contact-page-main-container'>
      <TopPageHeadTitleContainer title='Contact us' image='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=2880,fit=crop/minalitemywnw/kk-AVLnvEyZ8ehlnGNB.png'/>
      <div className='contact-page-content-main-container'>
        <ContactInfoContainer/>
        <ContactInputContainer/>
      </div>
    </div>
  )
}

export default ContactPage
