class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    pass = params[:session][:password]
    if user && user.authenticate(pass)
      log_in (user)
      redirect_to root_path
    else
      flash.now[:danger] = '入力情報に謝りがあります'
      render 'new'
    end
  end

  def destroy
    log_out
    redirect_to root_path
  end

end
