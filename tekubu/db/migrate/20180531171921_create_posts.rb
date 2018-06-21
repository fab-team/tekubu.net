class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
    	t.references :event, null: false               # 外部キー
    	t.references :book, null: false               # 外部キー

      t.timestamps null: false
    end

    # add_index :posts, :event_id
    # add_index :posts, :book_id
  end
end
