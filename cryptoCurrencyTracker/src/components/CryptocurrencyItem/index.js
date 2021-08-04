// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {itemData} = props
  const {currencyLogoUrl, currencyName, euroValue, usdValue} = itemData
  return (
    <li className="table-contents">
      <div className="type-info">
        <img src={currencyLogoUrl} alt={currencyName} className="logo" />
        <p className="contents">{currencyName}</p>
      </div>
      <div className="currency-type">
        <p className="contents">{usdValue}</p>
        <p className="contents">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
