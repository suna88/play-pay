class User < ApplicationRecord
  validates :name, presence:true
  validates :password, presence:true, length:{minimum:6}
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  validates :email, presence: true, length: { maximum: 255 },
            format: { with: VALID_EMAIL_REGEX }
  has_secure_password

end
