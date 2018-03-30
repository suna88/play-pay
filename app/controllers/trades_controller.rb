class TradesController < ApplicationController
  before_action :set_trade, only: [:show]

  def index

  end

  def show

    @amount = @trade.amount
    @to_yen = @amount * Coin.last.buy_price_per_yen
    @to_doller = @amount * Coin.last.buy_price_per_yen / 100

    if @trade.kind == 0
      @kind_label = '購入'
    else
      @kind_label = '売却'
    end

  end


  def new
    @trade = Trade.new

  end

  def create
    @trade = Trade.new(trade_params)
    @trade.user = current_user
    @trade.kind = 0
    @trade.status = 0

    if @trade.save
      redirect_to @trade
    else

    end

  end

  def edit

  end

  def update
    @trade.status = 1
  end


  private

  def trade_params
    params.require(:trade).permit(:amount,:currency_kind)
  end

  def set_trade
    @trade = Trade.find(params[:id])
  end
end
