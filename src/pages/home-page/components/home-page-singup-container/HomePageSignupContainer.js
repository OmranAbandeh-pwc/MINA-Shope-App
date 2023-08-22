import './homePageSignupContainer.css'

const HomePageSignupContainer = () => {
  return (
    <div className='home-page-signup-container'>
        <div className='home-page-signup-content'>
            <h1>Sign-up for our newsletter</h1>
            <div className='home-page-signup-input'>
                <h4>Your email</h4>
                <input placeholder='Your email adress'/>
            </div>
            <div className='home-page-signup-button'>submit</div>
        </div>
    </div>
  )
}

export default HomePageSignupContainer
