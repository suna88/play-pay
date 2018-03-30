class Admin::CoinsController < ApplicationController
  def index

  end

  def new
    @coin = Coin.new

  end

  def create
    @coin = Coin.new(set_coin)

    if @coin.save
      redirect_to admin_top_path
    else
      render 'new'
    end

  end

  private
  def set_coin
    params.require(:coin).permit(:buy_price_per_yen)
  end

end
