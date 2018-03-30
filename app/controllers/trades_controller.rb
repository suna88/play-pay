class TradesController < ApplicationController
  def index

  end


  def new
    @trade = Trade.new

  end

  def create
    @trade = Trade.new(trade_params)
    @trade.user = current_user
    @trade.kind = 'buy'
    @trade.status = 0

    if @trade.save
      redirect_to confirm_path
    else

    end

  end

  def confirm
    @trade = current_user.trades.order(:id).last
    @trade.status = 1
  end


  private

  def trade_params
    params.require(:trade).permit(:amount)
  end
end
