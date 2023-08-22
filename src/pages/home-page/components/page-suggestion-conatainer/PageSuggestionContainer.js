import { Link } from 'react-router-dom'
import MoreBtnTwo from '../../../../components/widgets/MoreBtnTwo'
import './pageSugestionContainer.css'

const PageSugestionContainer = ({image, title, des, link}) => {
  return (
    <div className='page-suggestion-container'>
        <img className='page-suggestion-image' src={image}/>
        <h1>{title}</h1>
        <p>{des}</p>
        <MoreBtnTwo title='Learn more' link={link}/>

    </div>
  )
}

export default PageSugestionContainer