// Write your JS code here

import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

const CryptocurrenciesList = props => {
  const {cryptoCurrenciesData} = props
  return (
    <div className="currency-table">
      <div className="table-headings">
        <div className="coin-type">
          <p className="sub-heading">Coin Type</p>
        </div>
        <div className="currency-type">
          <p className="sub-heading">USD</p>
          <p className="sub-heading">EURO</p>
        </div>
      </div>
      <ul className="list-container">
        {cryptoCurrenciesData.map(eachItem => (
          <CryptocurrencyItem key={eachItem.id} itemData={eachItem} />
        ))}
      </ul>
    </div>
  )
}

export default CryptocurrenciesList
