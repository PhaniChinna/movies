import {Component} from 'react'

import './index.css'

class ContactUs extends Component {
  render() {
    return (
      <div className="Contact-container">
        <div>
          <img
            src="https://res.cloudinary.com/dkwof0tuj/image/upload/v1679984253/google_ughpq7.png"
            className="Google-container"
            alt="Google"
          />
          <img
            src="https://res.cloudinary.com/dkwof0tuj/image/upload/v1679984371/twitter_a8drp0.png"
            className="Google-container"
            alt="Twitter"
          />
          <img
            src="https://res.cloudinary.com/dkwof0tuj/image/upload/v1679984426/instagram_jb5x82.png"
            className="Google-container"
            alt="Instagram"
          />
          <img
            src="https://res.cloudinary.com/dkwof0tuj/image/upload/v1679984476/youtube_doc0oz.png"
            className="Google-container"
            alt="YouTube"
          />
        </div>
        <div className="Paragraph-container">
          <p className="Contact-us">Contact us</p>
        </div>
      </div>
    )
  }
}

export default ContactUs
