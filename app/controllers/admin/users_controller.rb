class Admin::UsersController < ApplicationController
  before_action :confirm_admin


  def index

  end

  def done
    trade = Trade.find(params[:id])
    user = trade.user
    if trade.kind == 0
      balance = user.balance + trade.amount
    elsif trade.kind == 1
      balance = user.balance - trade.amount
    end
    if user.update_attribute(:balance, balance)
        trade.update_attribute(:status, 2)
      redirect_to user
    else
      flash.now[:danger] = "入力情報に不備があります"
      #logger.debug('_________________________')
      #logger.debug(user.errors.full_messages)
      #logger.debug('_________________________')
    end
  end


  private
  def confirm_admin
    unless current_user.admin_user?
      redirect_to root_path
    end
  end
end
