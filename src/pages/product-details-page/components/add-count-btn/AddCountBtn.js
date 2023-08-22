import './addCountBtn.css'

const AddCountBtn = () => {
  return (
    <div className='add-sum-btn-main-container'>
      <div className='add-sum-btn-container'>
        <div className='add-sum-btn'>-</div>
        <div className='add-sum-num'>1</div>
        <div className='add-sum-btn'>+</div>
      </div>
      <div className='product-status'></div>
    </div>
  )
}

export default AddCountBtn
