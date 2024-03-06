// Write your React code here.
import {Component} from 'react'
import Emojis from '../Emojis'
import LoveImage from '../LoveImage'

import './index.css'

class Feedback extends Component {
  state = {showLoveImage: false}

  onClickShowLoveImage = () => {
    this.setState({showLoveImage: true})
  }

  render() {
    const {showLoveImage} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="bg-container">
        <div className="inner-container">
          {showLoveImage ? (
            <LoveImage image={loveEmojiUrl} />
          ) : (
            <Emojis emojis={emojis} showLoveImage={this.onClickShowLoveImage} />
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
