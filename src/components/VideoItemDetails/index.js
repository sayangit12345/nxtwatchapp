import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import ReactPlayer from 'react-player'
import Header from '../Header'
import MenuandContacts from '../MenuandContacts'
import FunctionalityContext from '../../Context/functionalityContext'
import {
  VideoItemBgContainer,
  VideoItemDetailsContainer,
  DescriptionContainer,
  ProfileImage,
  VideoTitle,
  ViewsAndPublishedContainer,
  LikeButton,
  DisLikeButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    currentVideoDetails: {},
    isLiked: false,
    idDisLike: false,
    isSaved: true,
  }

  componentDidMount() {
    this.getCurrentJobDetails()
  }

  isLiked = () => {
    this.setState({isLiked: true, idDisLike: false})
  }

  isDisLiked = () => {
    this.setState({idDisLike: true, isLiked: false})
  }

  onClickGetResponse = () => {
    this.getCurrentJobDetails()
  }

  getCurrentJobDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const api = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(api, options)
    const data = await response.json()
    if (response.ok) {
      this.setState({
        currentVideoDetails: {
          description: data.video_details.description,
          publishedAt: data.video_details.published_at,
          thumbnailUrl: data.video_details.thumbnail_url,
          id: data.video_details.id,
          title: data.video_details.title,
          videoUrl: data.video_details.video_url,
          viewCount: data.video_details.view_count,
          channel: {
            name: data.video_details.channel.name,
            profileImageUrl: data.video_details.channel.profile_image_url,
            subscriberCount: data.video_details.channel.subscriber_count,
          },
        },
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <div className="jobs-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <div className="jobs-error-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
        className="jobs-failure-img"
      />
      <h1 className="jobs-failure-heading-text">Oops! Something Went Wrong</h1>
      <p className="jobs-failure-description">
        We are having some trouble to complete your request. Please try again.
      </p>
      <button
        type="button"
        className="button"
        onClick={this.onClickGetResponse}
      >
        Retry
      </button>
    </div>
  )

  renderJobDetails = () => (
    <FunctionalityContext.Consumer>
      {value => {
        const {currentVideoDetails, isLiked, idDisLike, isSaved} = this.state
        const {
          description,
          publishedAt,
          title,
          videoUrl,
          viewCount,
          channel,
        } = currentVideoDetails
        const {lightTheme, savedVideo} = value
        const Color = lightTheme ? '#231f20' : '#ffffff'
        const onClickSavedVideos = () => {
          savedVideo({...currentVideoDetails, isSaved})
        }

        return (
          <>
            <ReactPlayer
              url={videoUrl}
              controls
              width="1000px"
              height="500px"
            />
            <VideoTitle Color={Color}>{title}</VideoTitle>
            <ViewsAndPublishedContainer>
              <VideoTitle Color={Color}>{`${viewCount} views`}</VideoTitle>
              <VideoTitle Color={Color}>
                {formatDistanceToNow(new Date(publishedAt))}
              </VideoTitle>
              <div>
                <LikeButton
                  type="button"
                  id="liked"
                  onClick={this.isLiked}
                  isLiked={isLiked}
                >
                  <AiOutlineLike />
                  Like
                </LikeButton>
                <DisLikeButton
                  type="button"
                  id="Disliked"
                  onClick={this.isDisLiked}
                  idDisLike={idDisLike}
                >
                  <AiOutlineDislike />
                  Dislike
                </DisLikeButton>
                <button
                  type="button"
                  id="savedVideo"
                  aria-label="save-button"
                  onClick={onClickSavedVideos}
                >
                  <BiListPlus />
                </button>
                <label htmlFor="savedVideo">Save</label>
              </div>
            </ViewsAndPublishedContainer>
            <hr />
            <DescriptionContainer>
              <ProfileImage src={channel.profileImageUrl} alt="channel logo" />
              <div>
                <VideoTitle Color={Color}>{channel.name}</VideoTitle>
                <VideoTitle Color={Color}>{channel.subscriberCount}</VideoTitle>
                <VideoTitle Color={Color}>{description}</VideoTitle>
              </div>
            </DescriptionContainer>
          </>
        )
      }}
    </FunctionalityContext.Consumer>
  )

  renderJobResults = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderJobDetails()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <FunctionalityContext.Consumer>
        {value => {
          const {lightTheme} = value
          const backGroundColor = lightTheme ? '#f1f5f9' : '#0f0f0f'
          return (
            <>
              <Header />
              <VideoItemBgContainer>
                <MenuandContacts />
                <VideoItemDetailsContainer
                  bgColor={backGroundColor}
                  data-textid="videoItemDetails"
                >
                  {this.renderJobResults()}
                </VideoItemDetailsContainer>
              </VideoItemBgContainer>
            </>
          )
        }}
      </FunctionalityContext.Consumer>
    )
  }
}

export default VideoItemDetails
