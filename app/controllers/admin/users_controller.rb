class Admin::UsersController < ApplicationController
 # before_action :confirm_admin


  def index

  end

  def done
    trade = Trade.find(params[:id])
    trade.status = 2
    trade.save
    redirect_to admin_top_path
  end


  private
  def confirm_admin
    unless current_user.admin
      redirect_to root_path
    end
  end
end
