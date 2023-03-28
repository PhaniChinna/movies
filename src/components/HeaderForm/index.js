import {Link} from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'

import './index.css'

const HeaderRoute = () => (
  <>
    <div className="HeaderPage-container">
      <div className="Header-Page-container">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dkwof0tuj/image/upload/v1679643790/Group_7399_bzo5kj.png"
            className="Header-page-logo-movies"
            alt="Header-logo"
          />
        </Link>
        <ul className="Header-unOrdered-list">
          <li className="Header-unOrdered-Home">
            <Link className="Link-Home" to="/">
              Home
            </Link>
          </li>
          <li className="Header-unOrdered-Popular">
            <Link className="Link-Home" to="/popular">
              Popular
            </Link>
          </li>
        </ul>
      </div>
      <div className="headerPage-div-container">
        <AiOutlineSearch className="Header-Ai-out-search " />

        <img
          src="https://res.cloudinary.com/dkwof0tuj/image/upload/v1679649464/add-to-queue_1_a3kov3.png"
          className="Header-add-to-que"
          alt=" add-to-que"
        />
        <Link className="Link-header-path" to="/account">
          <img
            src="https://res.cloudinary.com/dkwof0tuj/image/upload/v1679648297/Avatar_b1rb5n.png"
            className="Header-image-logo-profile"
            alt="avatar"
          />
        </Link>
      </div>
    </div>
  </>
)

export default HeaderRoute
