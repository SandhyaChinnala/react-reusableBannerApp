// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerCards, key} = props
  const {headerText, description, className} = bannerCards
  console.log(key)

  return (
    <li className={`${className} banner-card-item`}>
      <div>
        <h1 className="title">{headerText}</h1>
        <p className="card-description">{description}</p>
        <button className="btn" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
