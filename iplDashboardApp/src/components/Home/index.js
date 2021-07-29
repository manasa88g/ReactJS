// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {isLoading: true, teamsList: []}

  componentDidMount() {
    this.getTeamsListData()
  }

  getTeamsListData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data.teams)
    const formattedData = data.teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))
    console.log(formattedData)
    this.setState({isLoading: false, teamsList: formattedData})
  }

  renderHome = () => {
    const {teamsList} = this.state
    return (
      <>
        <div className="heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl-logo"
            className="ipl-logo"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
        </div>
        <div className="matches-container">
          {teamsList.map(eachTeam => (
            <TeamCard key={eachTeam.id} teamDetails={eachTeam} />
          ))}
        </div>
      </>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="bg-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" width={50} height={50} />
          </div>
        ) : (
          this.renderHome()
        )}
      </div>
    )
  }
}

export default Home
