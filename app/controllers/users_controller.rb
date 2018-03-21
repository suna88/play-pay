class UsersController < ApplicationController
  def new
    @user = User.new

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
  end

  private
  def user_params
    params.require(:user).permit(:email, :name, :password)
  end

end
