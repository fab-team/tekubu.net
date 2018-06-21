class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.references :book, null: false               # 外部キー
      t.string :title, null: false
      t.string :url, null: false
      t.text :content, null: false
      t.string :post_created, null: false
      t.string :post_updated, null: false
      t.string :url_hash, null: false

      t.timestamps null: false
    end
  end
end
