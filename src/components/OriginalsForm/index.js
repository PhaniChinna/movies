import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import OriginalSlider from '../OriginalsSlider'

import './index.css'

const apiStatusConstant = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class OriginalsRoute extends Component {
  state = {
    originalList: [],
    apiStatus: apiStatusConstant.initial,
  }

  componentDidMount() {
    this.getOriginalData()
  }

  getOriginalData = async () => {
    this.setState({
      apiStatus: apiStatusConstant.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const OriginalApi = `https://apis.ccbp.in/movies-app/originals`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(OriginalApi, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      const OriginalsUpdated = data.results.map(each => ({
        id: each.id,
        posterPath: each.poster_path,
        title: each.title,
      }))
      this.setState({
        originalList: OriginalsUpdated,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstant.failure,
      })
    }
  }

  renderTotalSuccessFailure = () => {
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

  renderSuccessView = () => {
    const {originalList} = this.state
    return (
      <>
        <div>
          <OriginalSlider movies={originalList} />
        </div>
      </>
    )
  }

  renderLoaderView = () => (
    <div className="Original-Loader-view">
      <Loader type="TailSpin" color="#D81F26" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <div className="Render-failure-Originals">
      <img
        src="https://res.cloudinary.com/dkwof0tuj/image/upload/v1679902480/alert-triangle_hemaln.png"
        className="Render-Original-image"
        alt="dangerous-icon"
      />
      <h1 className="Original-someThing-went-wrong">
        Something Went Wrong Please Try again
      </h1>
      <button className="Original-button" type="button">
        TryAgain
      </button>
    </div>
  )

  render() {
    return <div>{this.renderTotalSuccessFailure()}</div>
  }
}

export default OriginalsRoute
