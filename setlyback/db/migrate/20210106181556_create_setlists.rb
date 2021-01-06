class CreateSetlists < ActiveRecord::Migration[6.0]
  def change
    create_table :setlists do |t|
      t.date :date
      t.string :venue
      t.string :location
      t.integer :price
      t.integer :tixsold
    
      t.timestamps
    end
  end
end
