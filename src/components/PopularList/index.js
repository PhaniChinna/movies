import './index.css'

const PopularList = props => {
  const {Movies} = props
  return (
    <>
      <ul className="un-ordered-list">
        {Movies.map(each => (
          <li>
            <img
              src={each.posterPath}
              alt={each.title}
              className="Popular-list-images"
            />
          </li>
        ))}
      </ul>
    </>
  )
}

export default PopularList
