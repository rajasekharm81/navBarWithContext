import {Component} from 'react'

import ThemeContext from '../../context/ThemeContext'
import './index.css'

class Home extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const imageUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

          const homeMainContainer = isDarkTheme
            ? 'homeMainContainerDark'
            : 'homeMainContainerLight'

          return (
            <div className={homeMainContainer}>
              <img className="homeImageEl" src={imageUrl} alt="home" />
              <h1>Home</h1>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
