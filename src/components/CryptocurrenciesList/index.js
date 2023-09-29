// Write your JS code here
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = props => {
  const {cryptoCurrencyData} = props

  return (
    <div className="crypto-data-container">
      <div className="crypto-table-heading-row">
        <p className="coin-type">Coin Type</p>
        <p className="coin-type-usd">USD</p>
        <p className="coin-type-euro">EURO</p>
      </div>
      <ul className="list-container">
        {cryptoCurrencyData.map(each => (
          <CryptocurrencyItem eachData={each} key={each.id} />
        ))}
      </ul>
    </div>
  )
}

export default CryptocurrenciesList
