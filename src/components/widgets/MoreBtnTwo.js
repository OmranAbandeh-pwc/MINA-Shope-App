import './homeBtnTwo.css'
import { Link } from 'react-router-dom'
const MoreBtnTwo = ({title, link}) => {
  return (
    <Link className='home-btn-two-link' to={link}>
    <div className='page-suggestion-btn'>
        <p>{title}</p>
    </div>
    </Link>
  )
}

export default MoreBtnTwo
