import {Component} from 'react'
import Cookies from 'js-cookie'
import {AiOutlineClose} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import MenuandContacts from '../MenuandContacts'
import VideosCard from '../VideosCard'
import FunctionalityContext from '../../Context/functionalityContext'

import {
  HomeMainBgContainer,
  ApiContainer,
  HomeAddsContainer,
  Image,
  CloseButton,
  SearchInput,
  SearchContainer,
  SearchButton,
  RenderApiContainer,
  VideosList,
  Paragraph,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    videoList: [],
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getJobDetails()
  }

  onClickResponse = () => {
    this.getJobDetails()
  }

  getJobDetails = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
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

  renderJobsListView = () => {
    const {videoList} = this.state
    const shouldShowVideosList = videoList.length > 0

    return shouldShowVideosList ? (
      <div className="all-products-container">
        <VideosList>
          {videoList.map(eachVideo => (
            <VideosCard eachVideo={eachVideo} key={eachVideo.id} />
          ))}
        </VideosList>
      </div>
    ) : (
      <div className="no-jobs-view">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          className="no-jobs-img"
          alt="no videos"
        />
        <h1 className="no-jobs-heading">No Search results found</h1>
        <p className="no-jobs-description">
          Try different key words or remove search filter
        </p>
        <button type="button" onClick={this.onClickResponse}>
          Retry
        </button>
      </div>
    )
  }

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
      <button type="button" className="button" onClick={this.onClickResponse}>
        Retry
      </button>
    </div>
  )

  renderLoadingView = () => (
    <div className="jobs-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderAllJobs = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderJobsListView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  renderHomeAddsContainer = () => (
    <FunctionalityContext.Consumer>
      {value => {
        const {hideBanner} = value
        const closeAddsContainer = () => {
          hideBanner()
        }

        return (
          <HomeAddsContainer data-testid="banner">
            <CloseButton
              type="button"
              onClick={closeAddsContainer}
              data-testid="close"
            >
              <AiOutlineClose />
            </CloseButton>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
            />
            <Paragraph>Buy Nxt Watch Premium prepaid plans with UPI</Paragraph>
            <button type="button">GET IT NOW</button>
          </HomeAddsContainer>
        )
      }}
    </FunctionalityContext.Consumer>
  )

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSearchJobs = () => {
    this.getJobDetails()
  }

  render() {
    return (
      <FunctionalityContext.Consumer>
        {value => {
          const {lightTheme, bannerShow} = value
          const backGroundColor = lightTheme ? '#f1f5f9' : '#181818'
          return (
            <>
              <Header />
              <HomeMainBgContainer>
                <MenuandContacts />
                <ApiContainer bgColor={backGroundColor} data-testid="home">
                  {bannerShow && this.renderHomeAddsContainer()}
                  <RenderApiContainer>
                    <SearchContainer>
                      <SearchInput
                        type="search"
                        onChange={this.onChangeSearchInput}
                      />
                      <SearchButton
                        type="button"
                        onClick={this.onSearchJobs}
                        data-testid="searchButton"
                      >
                        <BsSearch />
                      </SearchButton>
                    </SearchContainer>
                    {this.renderAllJobs()}
                  </RenderApiContainer>
                </ApiContainer>
              </HomeMainBgContainer>
            </>
          )
        }}
      </FunctionalityContext.Consumer>
    )
  }
}

export default Home
