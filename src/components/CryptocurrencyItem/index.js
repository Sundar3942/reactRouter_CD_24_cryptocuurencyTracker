// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {eachData} = props
  const {currencyName, currencyLogo, usdValue, euroValue} = eachData

  return (
    <li className="list-item">
      <div className="logo-and-name-container">
        <img src={currencyLogo} className="logo-img" alt={currencyName} />
        <p className="logo-name">{currencyName}</p>
      </div>
      <p className="coin-type-usd">{usdValue}</p>
      <p className="coin-type-euro">{euroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem
