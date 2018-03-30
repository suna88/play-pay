class ChangeDatatypeKindOfTrades < ActiveRecord::Migration[5.1]
  if Rails.env.development?
    def change
      change_column :trades, :kind, :integer
    end
  end
end
