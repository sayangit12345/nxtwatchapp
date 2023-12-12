import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {FaMoon} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'
import FunctionalityContext from '../../Context/functionalityContext'
import './index.css'

import {
  NavbarBgContainer,
  HeaderButtonContainer,
  HeaderButton,
  Image,
  PopUpContainer,
  ParagraphText,
  ConfirmButtonContainer,
} from './styledComponents'

const Header = props => (
  <FunctionalityContext.Consumer>
    {value => {
      const {lightTheme, changeTheme} = value
      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const onClickChangeTheme = () => {
        changeTheme()
      }

      const backGroundColor = lightTheme ? '#ffffff' : '#0f0f0f'
      return (
        <NavbarBgContainer bgColor={backGroundColor}>
          <Link to="/">
            <Image
              height="50px"
              src={
                lightTheme === true
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
              }
              alt="website logo"
            />
          </Link>
          <HeaderButtonContainer>
            <HeaderButton
              type="button"
              height="30px"
              width="60px"
              onClick={onClickChangeTheme}
              size="30px"
              data-testid="theme"
            >
              {lightTheme ? <FaMoon /> : <FiSun className="sun-Icon-style" />}
            </HeaderButton>
            <Image
              height="40px"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <div className="popup-container">
              <Popup
                modal
                trigger={
                  <HeaderButton
                    type="button"
                    height="30px"
                    width="60px"
                    border="#3b82f6 solid 1px"
                    color="#3b82f6"
                    weight="bold"
                    size="10px"
                  >
                    Logout
                  </HeaderButton>
                }
              >
                {close => (
                  <PopUpContainer bgColor={backGroundColor}>
                    <ParagraphText lightTheme={lightTheme}>
                      Are you sure, you want to logout?
                    </ParagraphText>
                    <ConfirmButtonContainer>
                      <HeaderButton
                        type="button"
                        onClick={() => close()}
                        border="#64748b solid 1px"
                        color="#64748b"
                        height="30px"
                        width="60px"
                        size="10px"
                      >
                        Cancel
                      </HeaderButton>
                      <HeaderButton
                        type="button"
                        onClick={onClickLogout}
                        border="none"
                        bgColor="#3b82f6"
                        color="#ffffff"
                        height="30px"
                        width="60px"
                        size="10px"
                      >
                        Confirm
                      </HeaderButton>
                    </ConfirmButtonContainer>
                  </PopUpContainer>
                )}
              </Popup>
            </div>
          </HeaderButtonContainer>
        </NavbarBgContainer>
      )
    }}
  </FunctionalityContext.Consumer>
)

export default withRouter(Header)
