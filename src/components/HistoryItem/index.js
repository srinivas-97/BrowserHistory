import './index.css'

const HistoryItem = props => {
  const {historyItem, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem

  const handleDelete = () => {
    deleteItem(id)
  }
  return (
    <li>
      <div className="listItem">
        <p className="para">{timeAccessed}</p>
        <img src={logoUrl} alt=" domain logo" />
        <p className="para">{title}</p>
        <p className="para">{domainUrl}</p>
        <div>
          <button
            data-testid="delete"
            onClick={handleDelete}
            className="button"
            type="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default HistoryItem
