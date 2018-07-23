class CreateTaggings < ActiveRecord::Migration[5.1]
  def change
    create_table :taggings do |t|
      t.integer :book_id
      t.integer :event_id

     # t.timestamps
    end
  end
end
