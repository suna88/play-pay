class UsersController < ApplicationController
  def index
    logger.debug('_______________')
    logger.debug(current_user.admin)
    logger.debug('___________________')
    if current_user.admin != 1
      redirect_to root_path
    end
  end

  def new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      flash[:success] = "hello"
      redirect_to login_path

    else
      render 'new'
    end

  end

  def show
    @user = current_user
  end

  private
  def user_params
    params.require(:user).permit(:email, :name, :password, :meta_address)
  end

end
