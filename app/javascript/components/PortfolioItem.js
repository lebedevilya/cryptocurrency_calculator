import React, { Component } from 'react'

class PortfolioItem extends Component {
  render(){
    return(
      <div>
        <div className="row">
          <div className="col">
            <div className="header">Currency</div>
            <div className="text">{this.props.item.currency.name}</div>
          </div>

          <div className="col">
            <div className="header">Current USD price:</div>
            <div className="text">{this.props.item.current_price_usd}</div>
          </div>

          <div className="col">
            <div className="header">Current BTC price:</div>
            <div className="text">{this.props.item.current_price_btc}</div>
          </div>

          <div className="col">
            <div className="header">Amount in your portfolio:</div>
            <div className="text">{this.props.item.amount}</div>
          </div>

          <div className="col">
            <div className="header">USD value:</div>
            <div className="text">{this.props.item.value_usd}</div>
          </div>

          <div className="col">
            <div className="header">BTC value:</div>
            <div className="text">{this.props.item.value_btc}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default PortfolioItem