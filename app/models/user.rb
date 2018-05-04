class User < ApplicationRecord
  validates :name, presence: true
  validates :meta_address, presence: true
  validates :password, presence: true, length: {minimum: 6}
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  validates :email, presence: true, length: {maximum: 255},
            format: {with: VALID_EMAIL_REGEX}, uniqueness: {case_sensitive: false}
  has_many :trades


  before_save {|user| user.email = email.downcase}
  has_secure_password


  def admin_user?
    if Rails.env.production?
      if self.admin == 1
        true
      else
        false
      end
    else
      return self.admin
    end
  end

  def confirm_wating?
    trades = self.trades.all
    trades.each do |trade|
      return true if trade.status == 1
    end
    return false
  end


end
