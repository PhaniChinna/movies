import {Component} from 'react'
import Cookies from 'js-cookie'
import HeaderRoute from '../HeaderForm'
import ContactUs from '../ContactUsForm'

import './index.css'

const username = localStorage.getItem('username')
const password = localStorage.getItem('password')

class AccountRoute extends Component {
  OnClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    return (
      <>
        <div className="Header-Route-container">
          <HeaderRoute />
        </div>
        <div className="Account-Route-container">
          <h1 className="Account-heading">Account</h1>
          <hr className="Account-line-hr" />
          <div className="Account-Member-ship">
            <p className="Member-ship-check">Membership</p>
            <div className="Account-form-column">
              <p className="Member-username">{username}@gmail.com</p>
              <p className="Member-Password">{password}:</p>
            </div>
          </div>
          <hr className="Account-line-hr" />
          <div className="Account-Details-list">
            <p className="Account-plan-details">Plan Details</p>
            <div className="Account-plan-Premium-ultra">
              <p className="Account-Premium">Premium</p>
              <p className="Account-Ultra-HD">Ultra HD</p>
            </div>
          </div>
        </div>
        <hr className="Account-line-hr-list" />
        <div className="LogOut-button">
          <button
            className="LogOut-Button-Container"
            type="button"
            onClick={this.OnClickLogout}
          >
            LogOut
          </button>
        </div>
        <div className="Contact-list-contact-us ">
          <ContactUs />
        </div>
      </>
    )
  }
}

export default AccountRoute
