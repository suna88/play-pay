class AddAddressColumnToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :meta_address, :string
  end
end
