import { useState } from 'react'
import './cardItem.css'
import { Link } from 'react-router-dom'

const CardItem = ({image, title, price, height, width}) => {

    const [isHover, setIsHover] = useState(false)

    const handleMouseEnter = () => {
        setIsHover(true);
     };
     const handleMouseLeave = () => {
        setIsHover(false);
     };
    //  height: '375px',
    //  width: '289px',
    const cardConttainer = {
        height: `${height}px`,
        width: width,
    }
    
    const cardImage = isHover ?  {
        height: `${height - 89}px`,
        width: '100%',
        background:`url(${image})`,
        backgroundSize: 'cover',
        objectFit: 'cover',
        filter: 'brightness(70%)',
        transitionDuration: '0.5s',
    } : {
        height: `${height - 89}px`,
        width: '100%',
        background:`url(${image})`,
        backgroundSize: 'cover',
        objectFit: 'cover', 
    }   
   

  return (
<Link className='item-card-link' to='/product/details'>
   <div style={cardConttainer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className='card-image' style={cardImage} >
        
        </div>
        <div className='card-container-info' >
            <h2>{title}</h2>
            <p>{`$ ${price}`}</p>
        </div>
   </div>
   </Link>
 
  )
}

export default CardItem
