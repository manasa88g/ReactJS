// Write your code here
import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
    id,
  } = matchDetails

  return (
    <div className="latest-match-container">
      <div className="match-info-logo">
        <div className="match-info">
          <h1 className="team-name">{competingTeam}</h1>
          <p className="team-name">{date}</p>
          <p className="info">{venue}</p>
          <p className="info">{result}</p>
        </div>
        <div className="logo">
          <img src={competingTeamLogo} alt={id} className="latest-match-logo" />
        </div>
      </div>

      <div className="match-won-details">
        <p className="sub-heading">First Innings</p>
        <p className="info">{firstInnings}</p>
        <p className="sub-heading">Second Innings</p>
        <p className="info">{secondInnings}</p>
        <p className="sub-heading">Man of the Match</p>
        <p className="info">{manOfTheMatch}</p>
        <p className="sub-heading">Umpires</p>
        <p className="info">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
