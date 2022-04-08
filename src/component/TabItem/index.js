import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  const activeTabButtonClassName = isActive ? 'active-tab-btn' : ' '

  return (
    <li className="tab-item-container">
      <button
        className={`tab-btn ${activeTabButtonClassName}`}
        type="button"
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
