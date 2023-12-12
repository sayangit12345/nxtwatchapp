import styled from 'styled-components'

export const VideoItemBgContainer = styled.div`
  display: flex;
`
export const VideoItemDetailsContainer = styled.div`
  background-color: ${props => props.bgColor};
  padding: 10px;
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
export const LikeButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${props => (props.isLiked ? '#2563eb' : '#64748b')};
  padding: 10px;
  font-weight: ${props => (props.isLiked ? 'bold' : 'normal')};
`
export const DisLikeButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${props => (props.idDisLike ? '#2563eb' : '#64748b')};
  padding: 10px;
  font-weight: ${props => (props.idDisLike ? 'bold' : 'normal')};
`
