import {Link} from 'react-router-dom'
import './index.css'
import {formatDistanceToNow} from 'date-fns'
import FunctionalityContext from '../../Context/functionalityContext'
import {
  ThumbnailImage,
  VideoTitle,
  ProfileImage,
  DescriptionContainer,
  ListContainer,
  ViewsAndPublishedContainer,
} from './styledComponents'

const VideosCard = props => {
  const {eachVideo} = props
  const {id, title, publishedAt, thumbnailUrl, viewCount, channel} = eachVideo
  return (
    <FunctionalityContext.Consumer>
      {value => {
        const {lightTheme} = value
        const Color = lightTheme ? '#231f20' : '#ffffff'
        return (
          <ListContainer>
            <Link to={`/videos/${id}`} className="link-job-details">
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <DescriptionContainer>
                <ProfileImage
                  src={channel.profileImageUrl}
                  alt="channel logo"
                />
                <div>
                  <VideoTitle Color={Color}>{title}</VideoTitle>
                  <VideoTitle Color={Color}>{channel.name}</VideoTitle>
                  <ViewsAndPublishedContainer>
                    <VideoTitle Color={Color}>{viewCount} views</VideoTitle>
                    <VideoTitle Color={Color}>
                      {formatDistanceToNow(new Date(publishedAt))}
                    </VideoTitle>
                  </ViewsAndPublishedContainer>
                </div>
              </DescriptionContainer>
            </Link>
          </ListContainer>
        )
      }}
    </FunctionalityContext.Consumer>
  )
}
export default VideosCard
