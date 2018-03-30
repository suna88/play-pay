class ChangeDatatypeKindOfTrades < ActiveRecord::Migration[5.1]
  def change
    change_column :trades, :kind, :integer
  end
end
