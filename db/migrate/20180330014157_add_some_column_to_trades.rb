class AddSomeColumnToTrades < ActiveRecord::Migration[5.1]
  def change
    add_reference :trades, :user
    add_column :trades, :kind,:string
    add_column :trades, :amount,:integer
    add_column :trades, :state, :integer

  end
end
