import './index.css'

const LoveImage = props => {
  const {image} = props

  return (
    <div className="thank-you-card">
      <div className="heart-image-container">
        <img className="image" src={image} alt="love Emoji" />
      </div>
      <div className="thank-you-container">
        <h1>Thank You</h1>
      </div>
      <h1 className="main-heading">
        We will use your feedback to improve our customer support performance.
      </h1>
    </div>
  )
}
export default LoveImage
