class Book < ApplicationRecord
  # belongs_to :article, class_name: "Evnet", foreign_key: "event_id"
  # has_many :posts, dependent: :destroy
  # has_many :events
  has_many :events, through: :taggings
  has_many :taggings, dependent: :destroy
  # has_many :voters, through: :posts, source: :member
end
