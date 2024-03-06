import './index.css'

const Emoji = props => {
  const {name, image, showLoveImage} = props

  const onClickShowImage = () => {
    showLoveImage()
  }

  return (
    <li className="emoji">
      <div>
        <img
          className="image"
          src={image}
          alt={name}
          onClick={onClickShowImage}
        />
        <div className="emoji-label-container">
          <p className="paragraph">{name}</p>
        </div>
      </div>
    </li>
  )
}

export default Emoji
