import styled from 'styled-components'

export const ListItemContainer = styled.li`
  padding: 15px;
  display: flex;
`
export const ThumbnailImage = styled.img`
  width: 50%;
`
export const DescriptionContainer = styled.div`
  padding: 10px;
`
export const ViewsAndPublishedContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const VideoTitle = styled.p`
  font-family: 'roboto';
  color: ${props => props.Color};
`
