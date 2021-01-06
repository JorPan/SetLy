class CreateSongsets < ActiveRecord::Migration[6.0]
  def change
    create_table :songsets do |t|
      t.references :song, null: false, foreign_key: true
      t.references :setlist, null: false, foreign_key: true

      t.timestamps
    end
  end
end
