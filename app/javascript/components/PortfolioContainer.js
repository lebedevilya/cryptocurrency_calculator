import React, { Component } from 'react'
import Search from './Search'
import Calculate from './Calculate'
import Portfolio from './Portfolio'

import axios from 'axios'

class PortfolioContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      portfolio: [],
      search_results: [],
      active_currency: null,
      amount: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleAmount = this.handleAmount.bind(this)
  }

  handleChange(event){
    axios.post('http://localhost:3000/search',
      {search: event.target.value}
    )
    .then((data) => {
      this.setState({
        search_results: data.data.currencies
      })
    })
    .catch((data) => {
      debugger
    })
  }

  handleSelect(event){
    event.preventDefault()
    const id = event.target.getAttribute('data-id')
    const activeCurrency = this.state.search_results.find( item => item.id == parseInt(id))
    this.setState({
      active_currency: activeCurrency,
      search_results: []
    })
  }

  handleSubmit(event){
    event.preventDefault()
    let currency = this.state.active_currency
    let amount = this.state.amount

    axios.post('http://localhost:3000/calculate', {
      id: currency.id,
      amount: amount
    })
    .then((data) => {
      console.log(data)
      this.setState({
        amount: '',
        active_currency: null,
        portfolio: [...this.state.portfolio, data.data]
      })
    })
    .catch((data) => {
      debugger
    })
  }

  handleAmount(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    const currentWindow = this.state.active_currency ?
    <Calculate
      handleChange={this.handleAmount}
      handleSubmit={this.handleSubmit}
      active_currency={this.state.active_currency}
      amount={this.state.amount}
    /> :
    <Search
      searchResults={this.state.search_results}
      handleChange={this.handleChange}
      handleSelect={this.handleSelect}/>

    return(
      <div className="grid">
        <div className="left">
          {currentWindow}
        </div>
        <div className="right">
          <Portfolio
            portfolio={this.state.portfolio}
          />
        </div>
      </div>
    )
  }
}

export default PortfolioContainer