class AddColumnToBook < ActiveRecord::Migration[5.1]
  def change
    add_column :books, :title, :string
    add_column :books, :publicationdate, :string
    add_column :books, :author, :string
    add_column :books, :detailpageurl, :string
    add_column :books, :content, :text
    add_column :books, :language, :string
    add_column :books, :image, :string
  end
end
