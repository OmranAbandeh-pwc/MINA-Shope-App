
import BestSellers from "./components/best-sellers/BestSellers"
import HandmadeCeramicsBackground from "./components/handmade-ceramics-background/HandmadeCeramicsBackground"
import HandmadeCeramics from "./components/handmade-ceramics/HandmadeCeramics"
import HomeFollowInstagramContainer from "./components/home-follow-instagram-container.js/HomeFollowInstagramContainer"
import HomePageSignupContainer from "./components/home-page-singup-container/HomePageSignupContainer"
import PageSugestionContainer from "./components/page-suggestion-conatainer/PageSuggestionContainer"
import "./homePage.css"

const HomePage = () => {
  const image = 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/A1aL88QRE2IPpnVr/Untitled-AzGRJwMK6BHxZypJ.png'
  return (
    <>
   
      <div className="home-page-main-container">
        <HandmadeCeramics/>
        <BestSellers/>
        <HandmadeCeramicsBackground image={image} mainTitle='Home decor items' des={'Find your new favorite pieces.'}/>
        <div className="home-suggested-pages-container">
          <PageSugestionContainer image='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1212,h=768,fit=crop/minalitemywnw/Rectangle-AVLnvkgy1guy1MK4.png' title='About Mina' link='/about' des='Mina is a brand born out of a passion for ceramics.'/>
          <PageSugestionContainer image='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1212,h=768,fit=crop/minalitemywnw/Rectangle-dJo73kDbN1i6M7yx.png' title='Sustainability' link='/sustainability' des='Mina is an eco-friendly brand that cares about sustainability.'/> 
        </div>
        <HomePageSignupContainer/>  
        <HomeFollowInstagramContainer/>
       
      </div>
    </>
  )
}

export default HomePage
