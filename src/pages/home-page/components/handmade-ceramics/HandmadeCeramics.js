import HandmadeCeramicsBackground from '../handmade-ceramics-background/HandmadeCeramicsBackground'
import './handmadeCeramics.css'
import FreeShopingContainer from '../../../../components/free-shoping-container/FreeShopingContainer'

const HandmadeCeramics = () => {


const image = 'https://www.creativosonline.org/wp-content/uploads/2022/04/gama-colores-bodegon.jpg.webp'


  return (
    <div className='handmade-ceramics-conatiner'>
      <FreeShopingContainer/>
      <HandmadeCeramicsBackground image={image} mainTitle={'Handmade ceramics'} des={'Painted clay ceramics made with love.'}/>
    </div>
  )
}

export default HandmadeCeramics
