import {Component} from 'react'

import ThemeContext from '../../context/ThemeContext'
import './index.css'

class NotFound extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const homeMainContainer = isDarkTheme
            ? 'homeMainContainerDark'
            : 'homeMainContainerLight'

          return (
            <div className={homeMainContainer}>
              <img
                className="homeImageEl"
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
              />
              <h1>Not Found</h1>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default NotFound
