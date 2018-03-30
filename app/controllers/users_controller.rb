class UsersController < ApplicationController
  before_action :set_user, only:[:show,:edit, :update]

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      flash.now[:success] = "登録が完了しました."
      redirect_to login_path

    else
      flash.now[:danger] = "入力情報に不備があります"
      render 'new'
    end
  end

  def show
    @user = current_user
    @valid_trades = @user.trades.where(status: 1).order(:created_at)
    @done_trades = @user.trades.where(status: 2).order(:created_at)
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
