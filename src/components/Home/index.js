import {Component} from 'react'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="homeMainContainer">
        <img
          className="homeImageEl"
          src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
          alt="home"
        />
        <h1>Home</h1>
      </div>
    )
  }
}

export default Home
