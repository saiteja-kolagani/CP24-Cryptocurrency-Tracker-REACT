// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoData: [], isLoading: true}

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formatedData = data.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))
    this.setState({
      cryptoData: formatedData,
      isLoading: false,
    })
  }

  render() {
    const {cryptoData, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Hearts" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <main className="main-container">
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="cryptocurrency-logo"
            />
            <ul className="unorderd-list-container">
              <li className="list-head-section">
                <p className="list-container-heading-1">Coin Type</p>
                <div className="list-container-sub-head">
                  <p className="list-container-heading-2">USD</p>
                  <p className="list-container-heading-2">EURO</p>
                </div>
              </li>
              {cryptoData.map(each => (
                <CryptocurrencyItem eachData={each} key={each.id} />
              ))}
            </ul>
          </main>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
