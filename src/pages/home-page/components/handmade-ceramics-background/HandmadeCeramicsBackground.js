import './handmadeCeramicsBackground.css'
import { Link } from 'react-router-dom'

const HandmadeCeramicsBackground = ({image, mainTitle, des}) => {

    const style={
        background:`rgba(0,0,0,0.2)url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        objectFit: 'cover',
        backgroundBlendMode: 'darken',
    }

  return (
    <div className='handmade-ceramics-background-pic' style={style}>
    <div className='handmade-ceramics-info'>
        <h1>{mainTitle}</h1>
        <p>{des}</p>
        <Link className='handmade-ceramics-btn'>shop now</Link>
    </div>
    
  </div>
  )
}

export default HandmadeCeramicsBackground
