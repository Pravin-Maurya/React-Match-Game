import './index.css'

const MatchItem = props => {
  const {ItemDetails, clickImage} = props
  const {id, thumbnailUrl} = ItemDetails

  const onClickImage = () => {
    clickImage(id)
  }

  return (
    <li className="match-item-container">
      <button type="button" className="image-button" onClick={onClickImage}>
        <img src={thumbnailUrl} alt="thumbnail" className="match-image" />
      </button>
    </li>
  )
}
export default MatchItem
