// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {
    isLoading: true,
    cryptoCurrencyData: [],
  }

  componentDidMount() {
    this.setContent()
  }

  setContent = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)
    const updatedData = data.map(each => ({
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      euroValue: each.euro_value,
      usdValue: each.usd_value,
      id: each.id,
    }))
    console.log(updatedData)
    this.setState({isLoading: false, cryptoCurrencyData: updatedData})
  }

  render() {
    const {isLoading, cryptoCurrencyData} = this.state

    return (
      <div className="page">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <>
            <h1 className="app-main-heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="app-img"
            />
            <CryptocurrenciesList cryptoCurrencyData={cryptoCurrencyData} />
          </>
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
