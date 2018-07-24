class Event < ApplicationRecord
	# belongs_to :book, class_name: "Book", foreign_key: "book_id"
  # counter_culture :book
  acts_as_taggable_on :dictionary
  acts_as_taggable

  class << self
    def status_text(status)
      I18n.t("activerecord.attributes.entry.status_#{status}")
    end

    def status_options
      STATUS_VALUES.map { |status| [status_text(status), status] }
    end

    def sidebar_entries(member, num = 5)
      readable_for(member).order(posted_at: :desc).limit(num)
    end
  end

end
