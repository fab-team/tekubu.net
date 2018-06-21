class AddPostCountToBooks < ActiveRecord::Migration[5.1]
  def self.up
    add_column :books, :post_count, :integer, null: false, default: 0
  end

  def self.down
    remove_column :books, :post_count
  end
end
