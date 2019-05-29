class Currency < ApplicationRecord
	def current_price
    url = 'https://api.coinmarketcap.com/v1/ticker/'
    request = HTTParty.get(url + self.slug)
    response = JSON.parse(request.body)[0]
    price_usd = response['price_usd']
    price_btc = response['price_btc']
    return price_usd, price_btc
	end

  def calculate_value(amount)
    current_price.map {|value| (value.to_f * amount.to_f).round(4)}
  end
end