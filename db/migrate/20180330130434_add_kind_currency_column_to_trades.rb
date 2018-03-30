class AddKindCurrencyColumnToTrades < ActiveRecord::Migration[5.1]
  def change
    add_column :trades, :currency_kind, :integer
  end
end
