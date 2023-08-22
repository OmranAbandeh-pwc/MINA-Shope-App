import './bestSellers.css'
import CardItem from '../../../../components/card-item/CardItem'
import { bestSellers } from '../../../../dummydata'
const BestSellers = () => {
  return (
    <div className='best-sellers-container'>
      <h1>Our bestsellers</h1>
      <div className='best-sellers-cards'>
      {bestSellers.map((item) => (
      <CardItem 
      image={item.image} 
      title={item.title} 
      price={item.price} 
      height={375}
      width={289}/>))}
      </div>
    </div>
  )
}

export default BestSellers
