class CreateCoins < ActiveRecord::Migration[5.1]
  def change
    create_table :coins do |t|
      t.integer :buy_price_per_yen

      t.timestamps
    end
  end
end
