import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import HeaderRoute from '../HeaderForm'

import PopularList from '../PopularList'

import ContactUs from '../ContactUsForm'

import './index.css'

const apiStatusConstant = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class PopularRoute extends Component {
  state = {
    PopularMovies: [],
    apiStatus: apiStatusConstant.initial,
  }

  componentDidMount() {
    this.getPopularMovies()
  }

  getPopularMovies = async () => {
    this.setState({
      apiStatus: apiStatusConstant.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const PopularApi = 'https://apis.ccbp.in/movies-app/popular-movies'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(PopularApi, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedPopular = data.results.map(each => ({
        id: each.id,
        posterPath: each.poster_path,
        title: each.title,
      }))
      this.setState({
        PopularMovies: updatedPopular,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstant.failure,
      })
    }
  }

  renderSuccessView = () => {
    const {PopularMovies} = this.state
    return (
      <>
        <PopularList Movies={PopularMovies} />
      </>
    )
  }

  renderLoaderView = () => (
    <div className="Render-loader-view">
      <Loader type="TailSpin" color="#D81F26" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <div className="Render-failure-view">
      <img
        src="https://res.cloudinary.com/dkwof0tuj/image/upload/v1679902480/alert-triangle_hemaln.png"
        className="Alert-failure-view"
        alt="alert"
      />
      <h1 className="render-failure-heading">
        something went wrong please try again
      </h1>
      <button className="Render-button-failure" type="button">
        Try Again
      </button>
    </div>
  )

  renderTotalSuccessData = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.renderSuccessView()
      case apiStatusConstant.failure:
        return this.renderLoaderView()
      case apiStatusConstant.inProgress:
        return this.renderLoaderView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <div>
          <HeaderRoute />
        </div>
        <div className="Popular-container">
          <div className="Popular-render-success">
            {this.renderTotalSuccessData()}
          </div>
          <div className="Contact-us-form">
            <ContactUs />
          </div>
        </div>
      </>
    )
  }
}

export default PopularRoute
