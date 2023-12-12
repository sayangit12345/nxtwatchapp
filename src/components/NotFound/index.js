import Header from '../Header'
import MenuandContacts from '../MenuandContacts'
import {VideoItemBgContainer} from '../Trending/styledComponents'

import './index.css'

const NotFound = () => (
  <>
    <Header />
    <VideoItemBgContainer>
      <MenuandContacts />
      <div className="not-found-bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
          alt="not found"
        />
        <h1>Page Not Found</h1>
        <p>we are sorry, the page you requested could not be found</p>
      </div>
    </VideoItemBgContainer>
  </>
)
export default NotFound
