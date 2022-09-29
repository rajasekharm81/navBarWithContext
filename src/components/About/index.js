import {Component} from 'react'

import ThemeContext from '../../context/ThemeContext'
import './index.css'

class About extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const imageUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

          const homeMainContainer = isDarkTheme
            ? 'homeMainContainerDark'
            : 'homeMainContainerLight'

          return (
            <div className={homeMainContainer}>
              <img className="homeImageEl" src={imageUrl} alt="home" />
              <h1>About</h1>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default About
