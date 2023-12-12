import styled from 'styled-components'

export const HomeMainBgContainer = styled.div`
  padding: 0;
  display: flex;
`

export const ApiContainer = styled.div`
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  flex-grow: 1;
  width: 80%;
`
export const HomeAddsContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
`
export const Image = styled.img`
  height: 40px;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  justify-content: flex-start;
  align-self: flex-end;
  height: 30px;
`
export const SearchInput = styled.input`
  height: 30px;
  width: 40%;
`
export const SearchContainer = styled.div`
  display: flex;
`
export const SearchButton = styled.button`
  background-color: #d7dfe9;
  border: #7e858e solid 1px;
  width: 50px;
`
export const RenderApiContainer = styled.div`
  padding: 10px;
`
export const VideosList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
`
export const Paragraph = styled.p`
  color: #181818;
`
