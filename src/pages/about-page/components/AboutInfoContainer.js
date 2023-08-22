import MoreBtnTwo from '../../../components/widgets/MoreBtnTwo'
import './aboutInfoContainer.css'

const AboutInfoContainer = () => {

    const contentTwoStyle = {
        height: '500px',
        width: '606px',
        objectFit: 'cover',
        backgroundSize: 'cover',
    }
    const test = {
        height:'50vh',
    width: '600px',
    display: 'flex',
    alignItems: 'center',
    }

    const btnstyle = {
        width: '175px',
    }

  return (
    <div>
      <div className='about-head-info'>
        <h3>Mina is a brand born out of love for ceramics, vivid colours and passion for life.</h3>
      </div>
      <div className='about-mid-info-container'>
        <img className='about-mid-pic-container' src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1212,h=2016,fit=crop/minalitemywnw/pexels-cottonbro-YKb0eZ64DRiPyZoD.jpg'></img>
        <div className='about-mid-content-container'>
            <div>
            <h1>Alex & Laura</h1>
            <p className='about-content'>Two creative minds that came together at art school, Alex and Laura founded Mina with a shared passion for design and sustainability. For them, success is more than just about having a bestselling product.</p>
            <p className='about-content'>Every piece in our store has been created with love by Alex and Laura. They take inspiration from the world around them when it comes to shapes, colors, and the clay that they work with.</p>
            <p className='about-content'>Join us on our mission to fill every home with beautiful, sustainable décor. </p>
            </div>
        </div>
      </div>
      <div className='about-mid-info-container'>
       
        <div className='about-content-container' style={test}>
            <div>
            <h1>Sustainability</h1>
          
            <p className='about-content'>Our thoughts about the planet impact everything we do, from the clay we use to the packaging we provide. Find out how we stay responsible.</p>
            <MoreBtnTwo title='Read more' style={btnstyle} link='/sustainability'/>
            </div>
        </div>
        <img style={contentTwoStyle}  src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1212,h=994,fit=crop/minalitemywnw/Rectangle-YrDPEe422ktklvXj.png'></img>
        
      </div>
    </div>
  )
}

export default AboutInfoContainer
