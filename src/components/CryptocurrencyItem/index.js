// Write your JS code here
import './index.css'

const CryptocurrencyItem = prosp => {
  const {eachData} = prosp
  const {currencyLogo, euroValue, usdValue, currencyName} = eachData
  return (
    <li className="list-container">
      <img src={currencyLogo} alt={currencyName} className="currency-logo" />
      <p className="currency-name">{currencyName}</p>
      <div className="value-container">
        <p className="value">{usdValue}</p>
        <p className="value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
