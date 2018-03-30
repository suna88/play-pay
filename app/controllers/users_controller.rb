class UsersController < ApplicationController
  before_action :set_user, only:[:show,:edit, :update]

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


  def edit


  end

  def update
    if @user.update(user_params)
      redirect_to @user
    else
      render :edit
    end
  end


  private
  def user_params
    params.require(:user).permit(:email, :name, :password, :meta_address)
  end

  def set_user
      @user = User.find(params[:id])
  end

end
