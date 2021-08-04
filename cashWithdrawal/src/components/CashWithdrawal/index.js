// Write your code here
import {Component} from 'react'

import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  reduceAmount = id => {
    const {denominationsList} = this.props
    const denominationObject = denominationsList.find(
      eachItem => eachItem.id === id,
    )

    this.setState(prevState => ({
      amount: prevState.amount - denominationObject.value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state

    return (
      <div className="bg-container">
        <div className="withdrawal-container">
          <div className="name-container">
            <div className="letter-container">
              <p className="letter">S</p>
            </div>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="text">Your Balance</p>
            <div className="amount-container">
              <p className="amount">{amount}</p>
              <p className="small-text">in Rupees</p>
            </div>
          </div>
          <p className="withdraw-text">Withdraw</p>
          <p className="text">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                denomination={eachItem}
                key={eachItem.id}
                reduceAmount={this.reduceAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
