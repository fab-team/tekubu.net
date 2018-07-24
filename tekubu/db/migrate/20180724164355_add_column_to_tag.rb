class AddColumnToTag < ActiveRecord::Migration[5.1]
  def change
    add_column :tags, :title, :string
    add_column :tags, :url, :string
    add_column :tags, :url_hash, :string
    add_column :tags, :content, :text
  end
end
