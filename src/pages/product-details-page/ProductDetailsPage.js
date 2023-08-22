import ProductContentContainer from './components/product-content-container/ProductContentContainer'
import ProductImageContainer from './components/product-image-container/ProductImageContainer'
import './productDetailsPage.css'

const ProductDetailsPage = () => {
  return (
    <div className='product-details-page'>
        <div className='product-details-page-main-container'>
            <ProductImageContainer/>
            <ProductContentContainer/>
        </div>
      
    </div>
  )
}

export default ProductDetailsPage
