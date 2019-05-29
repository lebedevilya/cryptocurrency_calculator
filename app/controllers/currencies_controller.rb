class CurrenciesController < ApplicationController
	def index
	end

	def search
    @currencies = Currency.where('LOWER(name) LIKE ?', "%#{params[:search].downcase}%")
    render json: {currencies: @currencies}
	end

	def calculate
    amount = params[:amount]
    current_price = currency.current_price
    value = currency.calculate_value(amount)
    render json: {
      currency: currency,
      current_price_usd: current_price[0],
      current_price_btc: current_price[1],
      amount: amount,
      value_usd: value[0],
      value_btc: value[1]
    }
	end

  private

  def currency
    @currency ||= Currency.find(params[:id])
  end
end