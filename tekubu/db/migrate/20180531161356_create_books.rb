class CreateBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :books do |t|
      t.references :event, null: false               # 外部キー
      t.string :url, null: false
      t.string :url_hash, null: false
      t.string :asin
      t.integer :taggings_count
      t.string :post_created, null: false
      t.string :post_updated, null: false

      t.timestamps null: false
    end
  end
end
