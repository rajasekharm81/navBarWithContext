import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

import ThemeContext from '../../context/ThemeContext'

import {
  NavbarContainer,
  MenuContainer,
  HeadingElement,
} from './styledComponents'

const navbarImageContainer = {
  websiteLogo: {
    light:
      'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png',
    dark:
      'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png',
  },
  themeIcon: {
    light: 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png',
    dark: 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png',
  },
}

class Navbar extends Component {
  render() {
    return (
      <ThemeContext>
        {value => {
          const {isDarkTheme, toggleTheme} = value

          const logoImageUrl = isDarkTheme
            ? navbarImageContainer.websiteLogo.dark
            : navbarImageContainer.websiteLogo.light

          const ThemeImgUrl = isDarkTheme
            ? navbarImageContainer.themeIcon.light
            : navbarImageContainer.themeIcon.dark

          const toggleState = () => {
            toggleTheme(isDarkTheme)
          }

          return (
            <div>
              <NavbarContainer theme={{isDarkTheme}}>
                <div>
                  <img
                    className="websiteLogoImageElement"
                    src={logoImageUrl}
                    alt="website logo"
                  />
                </div>
                <MenuContainer>
                  <Link className="link" to="/">
                    <HeadingElement theme={{isDarkTheme}}>Home</HeadingElement>
                  </Link>
                  <Link className="link" to="/about">
                    <HeadingElement theme={{isDarkTheme}}>About</HeadingElement>
                  </Link>
                </MenuContainer>
                <div>
                  <button
                    className="themeButton"
                    type="button"
                    onClick={toggleState}
                  >
                    <img
                      className="themeImageEl"
                      src={ThemeImgUrl}
                      alt="theme"
                    />
                  </button>
                </div>
              </NavbarContainer>
            </div>
          )
        }}
      </ThemeContext>
    )
  }
}

export default Navbar
