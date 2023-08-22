import './topPageHeadTitleContainer.css'
import FreeShopingContaienr from '../free-shoping-container/FreeShopingContainer'

const TopPageHeadTitleContainer = ({image, title}) => {

  const style = {
    background:`rgba(0, 0, 0, 0.2) url(${image})`,
    backgroundSize:'cover',
    backgroundRepeat: 'no-repeat',
    objectFit: 'cover',
    backgroundBlendMode: 'darken',
  }
  return (
    <>
    <FreeShopingContaienr/>
    <div className='top-page-head-title-container' style={style}>
      <h1>{title}</h1>
    </div>
    </>
  )
}

export default TopPageHeadTitleContainer
