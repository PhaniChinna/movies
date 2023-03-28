import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const TenderSlide = props => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    className: 'List-card',
  }
  const {movies} = props
  return (
    <>
      <Slider {...settings} className="Slider-Word">
        {movies.map(each => (
          <li className="TrendingSlider-container">
            <img
              className="Each-Poster-list"
              src={each.posterPath}
              alt={each.title}
            />
          </li>
        ))}
      </Slider>
    </>
  )
}

export default TenderSlide
