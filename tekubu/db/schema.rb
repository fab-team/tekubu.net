# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180723103043) do

  create_table "book", id: :integer, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4" do |t|
    t.string "url", limit: 2083, null: false
    t.string "url_hash", null: false
    t.string "asin"
    t.integer "taggings_count"
    t.string "post_created", null: false
    t.string "post_updated", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "books", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4" do |t|
    t.bigint "event_id", null: false
    t.string "url", null: false
    t.string "url_hash", null: false
    t.string "asin"
    t.integer "taggings_count"
    t.string "post_created", null: false
    t.string "post_updated", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "post_count", default: 0, null: false
    t.string "title"
    t.string "publicationdate"
    t.string "author"
    t.string "detailpageurl"
    t.text "content"
    t.string "language"
    t.string "image"
    t.index ["event_id"], name: "index_books_on_event_id"
  end

  create_table "event", id: :integer, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4" do |t|
    t.string "title", null: false
    t.string "url", null: false
    t.text "content", null: false
    t.string "post_created", null: false
    t.string "post_updated", null: false
    t.string "url_hash", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "events", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4" do |t|
    t.bigint "book_id", null: false
    t.string "title", null: false
    t.string "url", null: false
    t.text "content", null: false
    t.string "post_created", null: false
    t.string "post_updated", null: false
    t.string "url_hash", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["book_id"], name: "index_events_on_book_id"
  end

  create_table "posting", id: :integer, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4" do |t|
    t.integer "event_id"
    t.integer "bookable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["bookable_id"], name: "posting_bookable_id"
    t.index ["event_id"], name: "posting_event_id"
  end

  create_table "posts", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4" do |t|
    t.bigint "event_id", null: false
    t.bigint "book_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["book_id"], name: "index_posts_on_book_id"
    t.index ["event_id"], name: "index_posts_on_event_id"
  end

  create_table "taggings", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4" do |t|
    t.integer "book_id"
    t.integer "event_id"
  end

  create_table "tags", id: :integer, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4" do |t|
    t.string "name"
  end

  add_foreign_key "posting", "book", column: "bookable_id", name: "posting_ibfk_2"
  add_foreign_key "posting", "event", name: "posting_ibfk_1"
end
