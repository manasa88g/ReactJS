// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = matchDetails
  const statusColor = matchStatus === 'Won' ? 'green' : 'red'
  return (
    <li className="match-card-container">
      <img
        src={competingTeamLogo}
        alt={competingTeam}
        className="competing-team-logo"
      />
      <p className="competing-team">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={`status ${statusColor}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
