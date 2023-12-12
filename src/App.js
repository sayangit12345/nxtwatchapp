import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import './App.css'

import Login from './components/Login'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import FunctionalityContext from './Context/functionalityContext'

class App extends Component {
  state = {lightTheme: true, savedVideoList: [], bannerShow: true}

  changeTheme = () => {
    this.setState(prevState => ({lightTheme: !prevState.lightTheme}))
  }

  hideBanner = () => {
    this.setState({bannerShow: false})
  }

  savedVideo = videoList => {
    const {savedVideoList} = this.state
    const productObject = savedVideoList.find(
      eachCartItem => eachCartItem.id === videoList.id,
    )

    if (productObject) {
      this.setState(prevState => ({
        savedVideoList: prevState.savedVideoList.map(eachCartItem => {
          if (productObject.id === eachCartItem.id) {
            const updateSavedStatus = false

            return {...eachCartItem, isSaved: updateSavedStatus}
          }

          return eachCartItem
        }),
      }))
    } else {
      const updatedCartList = [...savedVideoList, videoList]

      this.setState({savedVideoList: updatedCartList})
    }
  }

  render() {
    const {lightTheme, savedVideoList, bannerShow} = this.state
    console.log(savedVideoList)
    return (
      <FunctionalityContext.Provider
        value={{
          lightTheme,
          bannerShow,
          changeTheme: this.changeTheme,
          savedVideo: this.savedVideo,
          hideBanner: this.hideBanner,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <Route component={NotFound} />
        </Switch>
      </FunctionalityContext.Provider>
    )
  }
}
export default App
