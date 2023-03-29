import './index.css'

import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import PasswordItem from '../PasswordItem'

class PassWordManager extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    passwordsList: [],
    searchInput: '',
    isCheckboxChecked: false,
  }

  getWebsite = event => {
    this.setState({website: event.target.value})
  }

  getUsername = event => {
    this.setState({username: event.target.value})
  }

  getPassword = event => {
    this.setState({password: event.target.value})
  }

  getSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onAdd = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const newPassword = {
      id: uuidv4(),
      website,
      username,
      password,
    }
    this.setState(prevState => ({
      website: '',
      username: '',
      password: '',
      passwordsList: [...prevState.passwordsList, newPassword],
    }))
  }

  deletePassword = id => {
    this.setState(prevState => ({
      passwordsList: prevState.passwordsList.filter(
        eachPassword => id !== eachPassword.id,
      ),
    }))
  }

  isChecked = event => {
    this.setState({isCheckboxChecked: event.target.checked})
    console.log(event.target.checked)
  }

  render() {
    const {
      website,
      username,
      password,
      passwordsList,
      searchInput,
      isCheckboxChecked,
    } = this.state
    const passwordCount = passwordsList.length
    const searchResult = passwordsList.filter(eachPassword =>
      eachPassword.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo"
        />
        <div className="new-password-window">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="password-manager-mobile"
          />

          <form className="add-password-card">
            <h1 className="main-heading">Add New Password</h1>
            <div className="input-container">
              <div className="icon-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="icon"
                />
              </div>
              <input
                type="text"
                placeholder="Enter Website"
                className="input"
                value={website}
                onChange={this.getWebsite}
              />
            </div>

            <div className="input-container">
              <div className="icon-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="icon"
                />
              </div>
              <input
                type="text"
                placeholder="Enter Username"
                className="input"
                value={username}
                onChange={this.getUsername}
              />
            </div>

            <div className="input-container">
              <div className="icon-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="icon"
                />
              </div>
              <input
                type="password"
                placeholder="Enter Password"
                className="input"
                value={password}
                onChange={this.getPassword}
              />
            </div>
            <button type="submit" className="add-btn" onClick={this.onAdd}>
              Add
            </button>
          </form>

          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png "
            alt="password manager"
            className="password-manager-desktop"
          />
        </div>

        <div className="your-passwords-window">
          <div className="header">
            <h1 className="header-heading">Your Passwords</h1>
            <p className="count-text">{passwordCount}</p>

            <div className="input-container search-input-container">
              <div className="icon-container search-icon-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="icon"
                />
              </div>
              <input
                type="search"
                placeholder="Search"
                className="input"
                value={searchInput}
                onChange={this.getSearchInput}
              />
            </div>
          </div>

          <hr className="separator" />

          <div className="checkbox-container">
            <input
              type="checkbox"
              id="checkbox"
              className="checkbox"
              checked={isCheckboxChecked}
              onChange={this.isChecked}
            />
            <label htmlFor="checkbox">Show Passwords</label>
          </div>

          {(passwordCount === 0 || searchResult.length === 0) && (
            <div className="no-password-display">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-passwords-img"
              />
              <p>No Passwords</p>
            </div>
          )}

          <ul className="passwords-container">
            {searchResult.map(eachPassword => (
              <PasswordItem
                passwordDetails={eachPassword}
                key={eachPassword.id}
                deletePassword={this.deletePassword}
                isCheckboxChecked={isCheckboxChecked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default PassWordManager
