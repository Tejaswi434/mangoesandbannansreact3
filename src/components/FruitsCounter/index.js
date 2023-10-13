import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  mangoCount = () => {
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }

  bananaCount = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  render() {
    const {mangoes, bananas} = this.state
    return (
      <div className="yellow">
        <div className="white">
          <h1>
            Bob Ate <span>{mangoes}</span> mangoes <span>{bananas}</span>
            bananas
          </h1>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
              className="size"
            />
            <button onClick={this.mangoCount} type="button">
              Eat mango
            </button>
          </div>

          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
              className="size"
            />
            <button onClick={this.bananaCount} type="button">
              Eat banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
