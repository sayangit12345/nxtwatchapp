import styled from 'styled-components'

export const NavbarBgContainer = styled.nav`
  background-color: ${props => props.bgColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`
export const HeaderButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 20%;
`
export const HeaderButton = styled.div`
  background-color: ${props => props.bgColor};
  border: ${props => props.border};
  color: ${props => props.color};
  height: ${props => props.height};
  width: ${props => props.width};
  font-weight: ${props => props.weight};
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.size};
`
export const Image = styled.img`
  height: ${props => props.height};
`
export const PopUpContainer = styled.div`
  background-color: ${props => props.bgColor};
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 150px;
`
export const ParagraphText = styled.p`
  color: ${props => (props.lightTheme ? '#475569' : '#ffffff')};
  font-family: 'roboto';
`
export const ConfirmButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
