class Tag < ApplicationRecord
	# belongs_to :book, class_name: "Book", foreign_key: "book_id"
  # counter_culture :book
  has_many :taggings
end
