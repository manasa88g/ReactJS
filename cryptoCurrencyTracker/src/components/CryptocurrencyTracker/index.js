// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {CryptocurrenciesDataList: [], isLoading: true}

  componentDidMount() {
    this.getCryptocurrenciesData()
  }

  getCryptocurrenciesData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyLogoUrl: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
    }))
    console.log(formattedData)
    this.setState({CryptocurrenciesDataList: formattedData, isLoading: false})
  }

  render() {
    const {CryptocurrenciesDataList, isLoading} = this.state
    return (
      <div className="bg-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="currencyTracker-container">
            <h1 className="main-heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="Cryptocurrency Tracker"
              className="currency-bg"
            />
            <CryptocurrenciesList
              cryptoCurrenciesData={CryptocurrenciesDataList}
            />
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
