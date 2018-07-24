class Book < ApplicationRecord
  # belongs_to :article, class_name: "Evnet", foreign_key: "event_id"
  # has_many :posts, dependent: :destroy
  has_many :events
  # has_many :voters, through: :posts, source: :member
  acts_as_taggable_on :dictionary
  acts_as_taggable
end
