class Admin::UsersController < ApplicationController

  def index
    unless current_user.admin
      redirect_to root_path
    end
  end


end
