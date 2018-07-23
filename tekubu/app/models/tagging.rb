class Tagging < ApplicationRecord
	belongs_to :book
	belongs_to :event
	validates :book_id,presence:true
	validates :event_id,presence:true
end
