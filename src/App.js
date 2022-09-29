import {Switch, Route} from 'react-router-dom'

import {Component} from 'react'

import Home from './components/Home'

import ThemeContext from './context/ThemeContext'

// import About from './components/About'

// import NotFound from './components/NotFound'

import Navbar from './components/Navbar'

import './App.css'

class App extends Component {
  state = {Theme: false}

  toggleTheme = isDarkTheme => {
    this.setState({Theme: !isDarkTheme})
    console.log(isDarkTheme)
  }

  render() {
    const {Theme} = this.state
    console.log(Theme)
    return (
      <ThemeContext.Provider
        value={{isDarkTheme: Theme, toggleTheme: this.toggleTheme}}
      >
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App

/* <Route exact path="/about" component={About} />
          <Route component={NotFound} /> */
