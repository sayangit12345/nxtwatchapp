import styled from 'styled-components'

export const ListContainer = styled.li`
  padding: 15px;
  max-width: 30%;
`
export const ThumbnailImage = styled.img`
  height: 200px;
  width: 100%;
`
export const VideoTitle = styled.p`
  font-family: 'roboto';
  color: ${props => props.Color};
`
export const ProfileImage = styled.img`
  height: 50px;
  margin-top: 10px;
  align-self: flex-start;
`
export const DescriptionContainer = styled.div`
  display: flex;
  padding: 5px;
  align-items: center;
`
export const ViewsAndPublishedContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
