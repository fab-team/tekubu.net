class CreateBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :books do |t|
      t.references :event               # 外部キー
      t.string :url
      t.string :url_hash
      t.string :asin
      t.integer :taggings_count
      t.string :post_created
      t.string :post_updated

      t.timestamps null: false
    end
  end
end
