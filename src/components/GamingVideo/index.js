import {Link} from 'react-router-dom'
import {
  ListItemContainer,
  ThumbnailImage,
  ViewsAndPublishedContainer,
} from './styledComponents'

const GamingVideo = props => {
  const {eachItem} = props
  const {id, title, thumbnailUrl, viewCount} = eachItem
  return (
    <ListItemContainer>
      <Link to={`/videos/${id}`} className="link-job-details">
        <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
        <p>{title}</p>
        <ViewsAndPublishedContainer>
          <p>{`${viewCount} Watching Worldwide`}</p>
        </ViewsAndPublishedContainer>
      </Link>
    </ListItemContainer>
  )
}

export default GamingVideo
