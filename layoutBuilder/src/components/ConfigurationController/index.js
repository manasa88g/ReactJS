// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
      } = value

      const isContentChecked = showContent === true ? 'checked' : ''
      const isLeftNavbarChecked = showLeftNavbar === true ? 'checked' : ''
      const isRightNavbarChecked = showRightNavbar === true ? 'checked' : ''

      return (
        <div className="configuration-container">
          <h1 className="configuration-heading">Layout</h1>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="content"
              value={showContent}
              name="content"
              checked={isContentChecked}
              onChange={onToggleShowContent}
              className="checkbox"
            />
            <label htmlFor="content">Content</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="leftNavbar"
              value={showLeftNavbar}
              name="left navbar"
              checked={isLeftNavbarChecked}
              onChange={onToggleShowLeftNavbar}
              className="checkbox"
            />
            <label htmlFor="leftNavbar">Left Navbar</label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="rightNavbar"
              value={showRightNavbar}
              name="right navbar"
              checked={isRightNavbarChecked}
              onChange={onToggleShowRightNavbar}
              className="checkbox"
            />
            <label htmlFor="rightNavbar">Right Navbar</label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
