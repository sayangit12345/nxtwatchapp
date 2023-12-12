import styled from 'styled-components'

export const VideoItemBgContainer = styled.div`
  display: flex;
`
export const VideoItemDetailsContainer = styled.div`
  width: 80%;
`
export const DescriptionContainer = styled.div`
  display: flex;
  padding: 5px;
  align-items: center;
`

export const ProfileImage = styled.img`
  height: 50px;
  margin-top: 10px;
  align-self: flex-start;
`
export const VideoTitle = styled.p`
  font-family: 'roboto';
  color: ${props => props.Color};
`
export const ViewsAndPublishedContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const VideoPlayerContainer = styled.div`
  min-width: 100%;
`

export const VideosList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  padding: 10px;
`
export const TrendingBgContainer = styled.div`
  background-color: ${props => props.bgColor};
`
export const HeadingContainer = styled.div`
  display: flex;
  background-color: ${props => (props.lightTheme ? '#cccccc' : '#212121')};
  padding: 10px;
`
export const IcpnContainer = styled.div`
  background-color: ${props => (props.lightTheme ? '#cbd5e1' : '#000000')};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff0000;
  padding: 10px;
  font-size: 30px;
  width: 70px;
  border-radius: 50%;
  margin-right: 10px;
`
