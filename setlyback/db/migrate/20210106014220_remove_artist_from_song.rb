class RemoveArtistFromSong < ActiveRecord::Migration[6.0]
  def change
    remove_column :songs, :artist, :string
  end
end
