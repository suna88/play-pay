class TradesController < ApplicationController
  before_action :set_trade, only: [:show, :edit, :update]

  def index

  end

  def show

    @amount = @trade.amount
    @to_yen = @amount * Coin.last.buy_price_per_yen
    @to_doller = @amount * Coin.last.buy_price_per_yen / 100

    if @trade.kind == 0
      @kind_label = '購入'
    elsif @trade.kind == 1
      @kind_label = '売却'
    else
      @kind_label = 'error'
    end

  end


  def new
    @trade = Trade.new

  end

  def create
    @trade = Trade.new(trade_params)
    @trade.user = current_user
    @trade.status = 0

    if @trade.save
      redirect_to @trade
    else
      flash.now[:danger] = "入力情報に不備があります"
      render 'new'

    end

  end

  def edit

  end

  def update
    if @trade.update(trade_params)
      redirect_to @trade
    else
      flash.now[:danger] = "入力情報に不備があります"
      render 'edit'
    end

  end

  def confirm
    trade = Trade.find(params[:id])
    trade.status = 1
    if trade.save
      flash[:success] = "トレードが受理されました"
      redirect_to current_user
    end
  end


  private

  def trade_params
    params.require(:trade).permit(:amount, :currency_kind, :kind)
  end

  def set_trade
    @trade = Trade.find(params[:id])
  end
end
