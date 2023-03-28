import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import TenderSlide from '../TrenderSlider'

import './index.css'

const apiStatusConstant = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class TrendingRout extends Component {
  state = {
    TrendingMovies: [],
    apiStatus: apiStatusConstant.initial,
  }

  componentDidMount() {
    this.getTrendingMoviesList()
  }

  getTrendingMoviesList = async () => {
    this.setState({
      apiStatus: apiStatusConstant.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const ApiUrl = 'https://apis.ccbp.in/movies-app/trending-movies'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(ApiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const UpdatedData = data.results.map(each => ({
        id: each.id,
        posterPath: each.poster_path,
        title: each.title,
      }))
      this.setState({
        TrendingMovies: UpdatedData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstant.failure,
      })
    }
  }

  renderLoaderView = () => (
    <div className="Loader-card-container">
      <Loader type="TailSpin" color="#D81F26" height="50" width="50" />
    </div>
  )

  renderSuccessView = () => {
    const {TrendingMovies} = this.state
    return (
      <>
        <TenderSlide movies={TrendingMovies} />
      </>
    )
  }

  renderFailureView = () => (
    <div className="Render-failure-view">
      <img
        src="https://res.cloudinary.com/dyx9u0bif/image/upload/v1657426934/homepage-failure_egb8fl.png"
        alt="Danger-view"
      />
      <h1 className="Something-went-wrong">
        Something Went Wrong, Please try again
      </h1>
      <button className="Render-failure-button" type="button">
        Try Again
      </button>
    </div>
  )

  renderTotalSuccessView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.renderSuccessView()
      case apiStatusConstant.failure:
        return this.renderFailureView()
      case apiStatusConstant.inProgress:
        return this.renderLoaderView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="Trending-Form-container">
        {this.renderTotalSuccessView()}
      </div>
    )
  }
}

export default TrendingRout
