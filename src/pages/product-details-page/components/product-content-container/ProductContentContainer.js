import AddCountBtn from '../add-count-btn/AddCountBtn'
import AddBagBtn from '../add-to-bag-btn/AddBagBtn'
import './productContentContainer.css'

const ProductContentContainer = () => {
  return (
    <div className='product-content-container'>
        <div>
            <h1>'Wave' Vase</h1>
            <p className='product-content-price'>$69.90</p>
            <AddCountBtn/>
            <AddBagBtn/>
            <p className='product-content-info'>Inspired by the female figure, a beautiful vase for one or two <br/> stems. Finished in a soft purple-grey glaze.<br/>Material: Stoneware clay; matte glaze. <br/>Color: Lavender <br/>Measurements: 30x18 cm</p>
        </div>
      
    </div>
  )
}

export default ProductContentContainer
