class Trade < ApplicationRecord
  belongs_to :user
  validates :amount, numericality: {greater_than: 0,less_than: 10000}
end
