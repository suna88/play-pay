class AddBalanceColumnToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :balance, :integer, default:0
  end
end
