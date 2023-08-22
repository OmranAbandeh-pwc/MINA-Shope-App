import MoreBtnTwo from '../../../../components/widgets/MoreBtnTwo'
import './homeFollowInstagramContainer.css'

const HomeFollowInstagramContainer = () => {
  return (
    <div className='home-follow-instagram-container'>
        <div className='home-follow-instagram-content'>
            <h1>Follow us on Instagram</h1>
             <div className='home-follow-instagram-image'>
                <img src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=945,fit=crop/minalitemywnw/mm-YBgqvl9QloTBK3BL.png'/>
                <img src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=945,fit=crop/minalitemywnw/gg-mk37Q8gargCeBpom.png'/>
                <img src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=984,h=945,fit=crop/minalitemywnw/pp-Y4LyMOXgyWUGR3qZ.png'/>
            </div>
            <div className='home-follow-instagram-btn'>
                <MoreBtnTwo title='@mina_studio'/>
            </div>
            
        </div>
    </div>
  )
}

export default HomeFollowInstagramContainer