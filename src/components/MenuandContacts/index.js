import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {IoLogoGameControllerB} from 'react-icons/io'
import {BiListPlus} from 'react-icons/bi'
import './index.css'
import {
  UnorderMenuList,
  ListItem,
  ListName,
  MenuAndContactContainer,
  ContactHeading,
  ContactImage,
  ContactParagraph,
} from './styledComponents'
import FunctionalityContext from '../../Context/functionalityContext'

const MenuandContacts = () => (
  <FunctionalityContext.Consumer>
    {value => {
      const {lightTheme} = value
      const backGroundColor = lightTheme === true ? '#ffffff' : '#0f0f0f'
      const Color = lightTheme ? '#231f20' : '#ffffff'
      return (
        <MenuAndContactContainer bgColor={backGroundColor} Color={Color}>
          <UnorderMenuList lightTheme={lightTheme}>
            <Link to="/" className="item-link">
              <ListItem>
                <AiFillHome />
                <ListName Color={Color}>Home</ListName>
              </ListItem>
            </Link>
            <Link to="/trending" className="item-link">
              <ListItem>
                <HiFire />
                <ListName Color={Color}>Trending</ListName>
              </ListItem>
            </Link>
            <Link to="/gaming" className="item-link">
              <ListItem>
                <IoLogoGameControllerB />
                <ListName Color={Color}>Gaming</ListName>
              </ListItem>
            </Link>
            <Link to="/savedvideos" className="item-link">
              <ListItem>
                <BiListPlus />
                <ListName Color={Color}>Saved Videos</ListName>
              </ListItem>
            </Link>
          </UnorderMenuList>
          <div>
            <ContactHeading lightTheme={lightTheme}>CONTACT US</ContactHeading>
            <div>
              <ContactImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <ContactImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <ContactImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </div>
            <ContactParagraph lightTheme={lightTheme}>
              Enjoy! Now to see your <br /> channels <br /> and recommendations!
            </ContactParagraph>
          </div>
        </MenuAndContactContainer>
      )
    }}
  </FunctionalityContext.Consumer>
)

export default MenuandContacts
