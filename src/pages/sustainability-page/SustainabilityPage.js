import FreeShopingContainer from "../../components/free-shoping-container/FreeShopingContainer"
import SustainabilityInfoContainer from "./components/sustainability-page-info-container/SustainabilityInfoContainer"
import TopPageHeadTitleContainer from '../../components/top-page-head-title-container/TopPageHeadTitleContainer'
import "./sustainabilityPage.css"

const SustainabilityPage = () => {
  return (
    <div className="sustainability-page-main-container">
      <TopPageHeadTitleContainer title='Sustainability' image='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/A1aL88QRE2IPpnVr/Frame-AGBpDkZaG5cRpbaw.png'/>
      <SustainabilityInfoContainer/>
    </div>
  )
}

export default SustainabilityPage
