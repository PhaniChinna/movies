import {Component} from 'react'
import Cookies from 'js-cookie'

import './index.css'

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    ShowErrorMsg: false,
    errorMsg: '',
  }

  onChangeUser = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onSubmitSuccessData = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailureData = errorMsg => {
    this.setState({
      ShowErrorMsg: true,
      errorMsg,
    })
  }

  onSubmitSuccess = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const UpdateDetails = {username, password}
    const ApiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(UpdateDetails),
    }
    const response = await fetch(ApiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccessData(data.jwt_token)
    } else {
      this.onSubmitFailureData(data.error_msg)
    }
  }

  render() {
    const {username, password, ShowErrorMsg, errorMsg} = this.state

    return (
      <div className="Login-page-container">
        <img
          src="https://res.cloudinary.com/dkwof0tuj/image/upload/v1679643790/Group_7399_bzo5kj.png"
          alt="movies-logo"
          className="Movies-icon-logo"
        />
        <div className="Login-page-movie-container">
          <form
            className="Login-form-container"
            onSubmit={this.onSubmitSuccess}
          >
            <h1 className="Heading">Login</h1>
            <label htmlFor="username" className="Label-username">
              USERNAME
            </label>
            <input
              className="Input-type-text"
              type="text"
              id="username"
              value={username}
              placeholder="Username"
              onChange={this.onChangeUser}
            />
            <label className="label-Password" htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              className="Input-type-password"
              value={password}
              placeholder="Password"
              onChange={this.onChangePassword}
            />
            {ShowErrorMsg && <p className="Login-error_Msg">*{errorMsg}</p>}
            <button type="submit" className="Login-button-container">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginPage
