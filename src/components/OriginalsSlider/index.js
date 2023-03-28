import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const OriginalSlider = props => {
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
      <Slider {...settings} className="Slider-Originals">
        {movies.map(each => (
          <li className="Original-slider">
            <img
              src={each.posterPath}
              alt={each.title}
              className="Each-original-slider"
            />
          </li>
        ))}
      </Slider>
    </>
  )
}

export default OriginalSlider
