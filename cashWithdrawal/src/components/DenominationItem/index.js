// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denomination, reduceAmount} = props
  const {value, id} = denomination

  const reduce = () => {
    reduceAmount(id)
  }

  return (
    <li>
      <button type="button" className="denomination-button" onClick={reduce}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
