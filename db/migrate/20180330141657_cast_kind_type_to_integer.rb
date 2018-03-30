class CastKindTypeToInteger < ActiveRecord::Migration[5.1]

  if Rails.env.production?
    def change
      change_column :trades, :kind, 'integer USING CAST(kind AS integer)'
    end
  end
end
