import React from 'react'

const FunctionalityContext = React.createContext({
  lightTheme: true,
  bannerShow: true,
  hideBanner: () => {},
  savedVideoList: [],
  changeTheme: () => {},
  savedVideo: () => {},
})

export default FunctionalityContext
