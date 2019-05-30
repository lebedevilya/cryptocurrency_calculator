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
    usd_value = (current_price[0].to_f * amount.to_f).round(4)
    btc_value = current_price[1].to_f * amount.to_f
    return usd_value, btc_value
  end
end