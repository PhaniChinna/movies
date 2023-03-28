import HeaderRoute from '../HeaderForm'

import TrendingRout from '../TrendingForm'

import OriginalsRoute from '../OriginalsForm'

import ContactUs from '../ContactUsForm'

import './index.css'

const HomePage = () => (
  <>
    <div className="Header-part-container">
      <HeaderRoute />
    </div>
    <div className="HomePage-container">
      <img
        src="https://res.cloudinary.com/dkwof0tuj/image/upload/v1679676916/Image_ghxnzr.png"
        className="Spider-man-image"
        alt="Spider Man"
      />
      <div className="HomePage-div-container">
        <h1 className="HomePage-Heading">Super Man</h1>
        <p className="HomePage-Paragraph">
          Super mam is a fictional superhero who first appeared in American
          comic books published by DC Comics
        </p>
        <button className="HomePage-Button" type="button">
          Play
        </button>
      </div>
      <div className="Home-page-LowerWord-container">
        <div className="Home-page-lower-card">
          <h1 className="HomePage-Trending">Trending</h1>
          <TrendingRout />
        </div>
      </div>
      <div className="Originals-page-LowerWord-container">
        <div className="Originals-page-lower-card">
          <h1 className="HomePage-Trending">Originals</h1>
          <OriginalsRoute />
        </div>
      </div>
      <div className="Home-contact-us">
        <ContactUs />
      </div>
    </div>
  </>
)

export default HomePage
