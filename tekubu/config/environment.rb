# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

Amazon::Ecs.debug = false
Amazon::Ecs.options = {
	:associate_tag => ENV["AWS_USER_ID"],
	:AWS_access_key_id => ENV["AWS_ACCESS_KEY"],
	:AWS_secret_key => ENV["AWS_SECRET_KEY"]
}
