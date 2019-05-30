import React, { Component } from 'react'
import PortfolioItem from './PortfolioItem'

class Portfolio extends Component {
  render(){

    const portfolioItems = this.props.portfolio.map( (item, index) => <PortfolioItem key={index} item={item}/>)
    const totalValueUSD = this.props.portfolio.reduce( (total, current) => total + current.value_usd, 0)
    const totalValueBTC = this.props.portfolio.reduce( (total, current) => total + current.value_btc, 0)
    return(
      <div>
        <div className="portfolio-value">
          <div className="portfolio-value--header">Your total portfolio value is:</div>
          <div className="portfolio-value--content">USD: {totalValueUSD}</div>
          <div className="portfolio-value--content">BTC: {totalValueBTC}</div>
        </div>
        <div className="portfolio-items">
          {portfolioItems}
        </div>
      </div>
    )
  }
}

export default Portfolio