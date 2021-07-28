import {Component} from 'react'

import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

// Write your code here
class GithubPopularRepos extends Component {
  state = {
    activeLangId: languageFiltersData[0].id,
    popularRepos: [],
    apiStatus: apiConstants.initial,
  }

  componentDidMount() {
    this.getPopularRepos()
  }

  formatData = object => ({
    id: object.id,
    name: object.name,
    issuesCount: object.issues_count,
    starsCount: object.stars_count,
    forksCount: object.forks_count,
    avatarUrl: object.avatar_url,
  })

  getPopularRepos = async () => {
    this.setState({apiStatus: apiConstants.inProgress})
    const {activeLangId} = this.state
    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${activeLangId}`
    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      const formattedData = data.popular_repos.map(eachObject =>
        this.formatData(eachObject),
      )
      console.log(formattedData)
      this.setState({
        popularRepos: formattedData,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  updateActiveFilter = langId => {
    this.setState({activeLangId: langId}, this.getPopularRepos)
  }

  renderFiltersData = () => {
    const {activeLangId} = this.state
    return (
      <ul className="language-filters-container">
        {languageFiltersData.map(eachLang => (
          <LanguageFilterItem
            key={eachLang.id}
            languageDetails={eachLang}
            activeLangId={activeLangId}
            updateActiveFilter={this.updateActiveFilter}
          />
        ))}
      </ul>
    )
  }

  renderLoading = () => (
    <div className="bottom-container" testid="loader">
      <Loader color="#0284c7" type="ThreeDots" height="80" width="80" />
    </div>
  )

  renderFailureView = () => (
    <div className="bottom-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt=" failure view"
        className="failure-image"
      />
      <p className="failure-info">Something went wrong</p>
    </div>
  )

  renderSuccessView = () => {
    const {popularRepos} = this.state
    return (
      <div className="success-container">
        {popularRepos.map(eachItem => (
          <RepositoryItem key={eachItem.id} itemDetails={eachItem} />
        ))}
      </div>
    )
  }

  renderSwitch = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiConstants.success:
        return this.renderSuccessView()
      case apiConstants.failure:
        return this.renderFailureView()
      case apiConstants.inProgress:
        return this.renderLoading()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="github-container">
        <h1 className="main-heading">Popular</h1>
        {this.renderFiltersData()}
        {this.renderSwitch()}
      </div>
    )
  }
}

export default GithubPopularRepos
