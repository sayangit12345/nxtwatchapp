import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import TrendingVideo from '../TrendingVideo'
import Header from '../Header'
import MenuandContacts from '../MenuandContacts'
import FunctionalityContext from '../../Context/functionalityContext'
import {
  VideoItemBgContainer,
  VideoItemDetailsContainer,
  VideosList,
  TrendingBgContainer,
  HeadingContainer,
  IcpnContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoList: [],
  }

  componentDidMount() {
    this.getCurrentJobDetails()
  }

  onClickGetResponse = () => {
    this.getCurrentJobDetails()
  }

  getCurrentJobDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const api = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(api, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideos => ({
        id: eachVideos.id,
        title: eachVideos.title,
        publishedAt: eachVideos.published_at,
        thumbnailUrl: eachVideos.thumbnail_url,
        viewCount: eachVideos.view_count,
        channel: {
          name: eachVideos.channel.name,
          profileImageUrl: eachVideos.channel.profile_image_url,
        },
      }))
      this.setState({
        videoList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
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
        We are having some trouble to complete your request.Plaese try again
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
        const {videoList} = this.state
        const {lightTheme} = value
        const backGroundColor = lightTheme ? '#e2e8f0' : '#0f0f0f'
        return (
          <TrendingBgContainer bgColor={backGroundColor} data-testid="trending">
            <HeadingContainer lightTheme={lightTheme}>
              <IcpnContainer lightTheme={lightTheme}>
                <HiFire />
              </IcpnContainer>
              <h1>Trending</h1>
            </HeadingContainer>
            <VideosList>
              {videoList.map(eachItem => (
                <TrendingVideo eachItem={eachItem} key={eachItem.id} />
              ))}
            </VideosList>
          </TrendingBgContainer>
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
      <>
        <Header />
        <VideoItemBgContainer>
          <MenuandContacts />
          <VideoItemDetailsContainer>
            {this.renderJobResults()}
          </VideoItemDetailsContainer>
        </VideoItemBgContainer>
      </>
    )
  }
}

export default Trending
