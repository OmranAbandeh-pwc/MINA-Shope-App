import FreeShopingContainer from "../../components/free-shoping-container/FreeShopingContainer"
import TopPageHeadTitleContainer from "../../components/top-page-head-title-container/TopPageHeadTitleContainer"
import "./aboutPage.css"
import AboutInfoContainer from "./components/AboutInfoContainer"

const AboutPage = () => {
  return (
    <div className='about-page-main-container'>
        <TopPageHeadTitleContainer title='About Mina' image='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/YNqOVn7nj2cLkLOX/Frame-YanWlX24wOIg2vwL.png'/>
        <AboutInfoContainer/>
    </div>
  )
}

export default AboutPage
