import Emoji from '../Emoji'

import './index.css'

const Emojis = props => {
  const {emojis, showLoveImage} = props

  return (
    <div className="feedback-container">
      <h1 className="main-heading">
        How satisfied are you with our customer support performance?
      </h1>
      <ul className="emoji-container">
        {emojis.map(emoji => (
          <Emoji
            key={emoji.id}
            name={emoji.name}
            image={emoji.imageUrl}
            showLoveImage={showLoveImage}
          />
        ))}
      </ul>
    </div>
  )
}

export default Emojis
