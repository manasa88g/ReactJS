// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      const renderLeftNavbar = () => (
        <nav className="navbar left">
          <h1 className="nav-menu-heading">Left Navbar Menu</h1>
          <ul className="item-list">
            <li className="item">Item 1</li>
            <li className="item">Item 2</li>
            <li className="item">Item 3</li>
            <li className="item">Item 4</li>
          </ul>
        </nav>
      )

      const renderRightNavbar = () => (
        <nav className="navbar right">
          <h1 className="nav-menu-heading">Right Navbar Menu</h1>
          <div className="ad-container">
            <p className="item">Ad 1</p>
          </div>
          <div className="ad-container">
            <p className="item">Ad 2</p>
          </div>
        </nav>
      )

      const renderContent = () => (
        <div className="content-container">
          <h1 className="nav-menu-heading">Content</h1>
          <p className="item">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      )

      return (
        <div className="body-container">
          {showLeftNavbar && renderLeftNavbar()}
          {showContent && renderContent()}
          {showRightNavbar && renderRightNavbar()}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
