import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import FunctionalityContext from '../../Context/functionalityContext'
import {
  ListItemContainer,
  ThumbnailImage,
  DescriptionContainer,
  ViewsAndPublishedContainer,
  VideoTitle,
} from './styledComponents'

const TrendingVideo = props => (
  <FunctionalityContext.Consumer>
    {value => {
      const {lightTheme} = value
      const {eachItem} = props
      const {
        id,
        title,
        publishedAt,
        thumbnailUrl,
        viewCount,
        channel,
      } = eachItem
      const Color = lightTheme ? '#231f20' : '#ffffff'
      return (
        <Link to={`/videos/${id}`} className="link-job-details">
          <ListItemContainer>
            <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
            <DescriptionContainer>
              <VideoTitle Color={Color}>{title}</VideoTitle>
              <VideoTitle Color={Color}>{channel.name}</VideoTitle>
              <ViewsAndPublishedContainer>
                <VideoTitle Color={Color}>{`${viewCount} views`}</VideoTitle>
                <VideoTitle Color={Color}>
                  {formatDistanceToNow(new Date(publishedAt))}
                </VideoTitle>
              </ViewsAndPublishedContainer>
            </DescriptionContainer>
          </ListItemContainer>
        </Link>
      )
    }}
  </FunctionalityContext.Consumer>
)

export default TrendingVideo
