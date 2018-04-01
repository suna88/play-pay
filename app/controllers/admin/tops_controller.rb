class Admin::TopsController < ApplicationController
  def top
    unless current_user.admin_user?
      redirect_to root_path
    end
  end
end
