class Status < ActiveRecord::Migration[5.1]
  def change
    add_column :trades, :status, :integer
  end
end
