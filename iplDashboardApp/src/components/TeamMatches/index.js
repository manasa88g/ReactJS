// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, recentMatchesList: [], latestMatches: {}}

  componentDidMount() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    this.getMatchDetails(id)
  }

  getMatchDetails = async id => {
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    this.bannerImageURL = data.team_banner_url

    const latestMatch = {
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      id: data.latest_match_details.id,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
    }
    const recentMatches = data.recent_matches.map(eachMatch => ({
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      date: eachMatch.date,
      firstInnings: eachMatch.first_innings,
      id: eachMatch.id,
      manOfTheMatch: eachMatch.man_of_the_match,
      matchStatus: eachMatch.match_status,
      result: eachMatch.result,
      secondInnings: eachMatch.second_innings,
      umpires: eachMatch.umpires,
      venue: eachMatch.venue,
    }))

    this.setState({
      isLoading: false,
      recentMatchesList: recentMatches,
      latestMatches: latestMatch,
    })
  }

  renderTeamMatches = () => {
    const {recentMatchesList, latestMatches} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    const matchContainer = `team-matches-container ${id.toLowerCase()}`

    return (
      <div className={matchContainer}>
        <img src={this.bannerImageURL} alt={id} className="team-match-image" />
        <p className="heading">Latest Matches</p>
        <LatestMatch key={latestMatches.id} matchDetails={latestMatches} />
        <ul className="list-container">
          {recentMatchesList.map(eachMatch => (
            <MatchCard key={eachMatch.id} matchDetails={eachMatch} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div testid="loader" className="bg-container">
            <Loader type="Oval" color="#ffffff" width={50} height={50} />
          </div>
        ) : (
          this.renderTeamMatches()
        )}
      </div>
    )
  }
}

export default TeamMatches
