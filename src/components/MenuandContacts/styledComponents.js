import styled from 'styled-components'

export const UnorderMenuList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`
export const ListItem = styled.li`
  display: flex;
  align-items: center;
`
export const ListName = styled.p`
  color: ${props => props.Color};
  margin-left: 10px;
  text-decoration: none;
`
export const MenuAndContactContainer = styled.div`
  background-color: ${props => props.bgColor};
  color: ${props => props.Color};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 20%;
  padding: 10px;
`
export const ContactHeading = styled.p`
  color: ${props => (props.lightTheme ? '#231f20' : '#ffffff')};
  font-family: roboto;
  font-size: 20px;
`
export const ContactImage = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 10px;
`
export const ContactParagraph = styled.p`
  color: ${props => (props.lightTheme ? '#231f20' : '#ffffff')};
  font-family: roboto;
  font-weight: bold;
`
