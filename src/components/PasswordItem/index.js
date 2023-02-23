import './index.css'

const PasswordItem = props => {
  const {passwordDetails, deletePassword, isCheckboxChecked} = props
  const {id, website, username, password} = passwordDetails
  const onDelete = () => {
    deletePassword(id)
  }
  return (
    <li className="password-container">
      <p className="dp">{username[0]}</p>
      <div>
        <p className="website">{website}</p>
        <p className="username">{username}</p>
        {isCheckboxChecked && <p className="username">{password}</p>}
        {!isCheckboxChecked && (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="mask"
          />
        )}
      </div>
      <button
        type="button"
        className="delete-btn"
        onClick={onDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}
export default PasswordItem
