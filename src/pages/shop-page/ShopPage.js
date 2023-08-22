import TopPageHeadTitleContainer from '../../components/top-page-head-title-container/TopPageHeadTitleContainer'
import './shopPage.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import CardItem from '../../components/card-item/CardItem'
import { bestSellers } from '../../dummydata'

const ShopPage = () => {

    const {products} = useParams()
    const [productsFilter, setProductsFilter] = useState(false)

    useEffect(() => {
        if(products === 'all_products'){} else {}
    },[])

    console.log(products)

  return (
    <div className='shop-page'>
      <TopPageHeadTitleContainer title={ products === 'all_products' ? 'Shop' : 'New collection'}
       image={products === 'all_products' ? 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=2880,fit=crop/minalitemywnw/dd-d95eByKQX2CoQJ4L.png' : 
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1212,h=768,fit=crop/minalitemywnw/Rectangle-dJo73kDbN1i6M7yx.png'}/>
      <div className='shop-page-cards-items-container'>{bestSellers.map((item) => (<CardItem 
      image={item.image} 
      title={item.title} 
      price={item.price} 
      height={460} 
      width={374}/>))}
      
      </div>
    </div>
  )
}

export default ShopPage
